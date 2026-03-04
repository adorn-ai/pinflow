import { Button } from "./ui/button";
import { useWaitlist } from "../contexts/WaitlistContext";
import { PinterestFeedMockup } from "./PinterestFeedMockup";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Input } from "./ui/input";
import { useState } from "react";
import confetti from "canvas-confetti";

export function HeroSection() {
  const { count, incrementCount } = useWaitlist();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const avatars = [
    "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMGhlYWRzaG90fGVufDF8fHx8MTc3MjEyMTAxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjE3MjcxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMTgxNDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758525589763-b9ad2a75bfe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzIxMDg4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      try {
        const apiUrl =
          import.meta.env.VITE_PUBLIC_API_URL || "http://localhost:3001";
        const response = await fetch(`${apiUrl}/api/subscribe`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            reactivate_existing: false,
            send_welcome_email: false,
            utm_source: "landing_page",
            utm_medium: "waitlist_form",
            utm_campaign: "pinflow_launch",
          }),
        });

        if (!response.ok) {
          console.error("Beehiiv failed:", await response.text());
        }
      } catch (error) {
        console.error("Beehiiv error:", error);
      }

      incrementCount();
      setSubmitted(true);
      setEmail("");

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#E60023", "#FF6B9D", "#FFC8AA", "#FFFFFF"],
      });

      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Enhanced Aurora Background Animation - Desktop */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {/* First gradient - large red glow */}
        <div
          className="absolute animate-drift"
          style={{
            top: "70%",
            left: "60%",
            transform: "translate(-50%, -50%)",
            width: "900px",
            height: "900px",
            borderRadius: "50%",
            filter: "blur(120px)",
            background:
              "radial-gradient(circle, rgba(230, 0, 35, 0.20) 0%, transparent 50%)",
          }}
        />
        {/* Second gradient - pink glow */}
        <div
          className="absolute animate-drift"
          style={{
            top: "50%",
            left: "20%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            filter: "blur(120px)",
            background:
              "radial-gradient(circle, rgba(255, 107, 157, 0.16) 0%, transparent 50%)",
            animationDelay: "-3s",
          }}
        />
        {/* Third gradient - peach glow */}
        <div
          className="absolute animate-drift"
          style={{
            top: "30%",
            left: "80%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            filter: "blur(100px)",
            background:
              "radial-gradient(circle, rgba(255, 200, 170, 0.10) 0%, transparent 50%)",
            animationDelay: "-6s",
          }}
        />
      </div>

      {/* Enhanced Aurora Background Animation - Mobile */}
      <div className="absolute inset-0 pointer-events-none md:hidden">
        {/* First gradient - large red glow positioned between headline and email */}
        <div
          className="absolute animate-drift"
          style={{
            top: "65%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80vw",
            height: "80vw",
            borderRadius: "50%",
            filter: "blur(100px)",
            background:
              "radial-gradient(circle, rgba(230, 0, 35, 0.28) 0%, transparent 50%)",
          }}
        />
        {/* Second gradient - pink glow offset to bottom left */}
        <div
          className="absolute animate-drift"
          style={{
            top: "75%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            width: "70vw",
            height: "70vw",
            borderRadius: "50%",
            filter: "blur(100px)",
            background:
              "radial-gradient(circle, rgba(255, 107, 157, 0.22) 0%, transparent 50%)",
            animationDelay: "-3s",
          }}
        />
        {/* Third gradient - peach glow */}
        <div
          className="absolute animate-drift"
          style={{
            top: "55%",
            left: "70%",
            transform: "translate(-50%, -50%)",
            width: "60vw",
            height: "60vw",
            borderRadius: "50%",
            filter: "blur(80px)",
            background:
              "radial-gradient(circle, rgba(255, 200, 170, 0.15) 0%, transparent 50%)",
            animationDelay: "-6s",
          }}
        />
      </div>

      {/* Mobile: Pinterest Feed Background (visible only on mobile) */}
      <div className="absolute inset-0 md:hidden pointer-events-none opacity-60">
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, #FAF9F7 0%, rgba(250, 249, 247, 0.5) 15%, rgba(250, 249, 247, 0.5) 85%, #FAF9F7 100%)",
          }}
        />
        <div className="absolute inset-0 scale-110 origin-center">
          <PinterestFeedMockup />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop: Two Column Layout */}
        <div className="hidden md:grid md:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left" style={{ paddingLeft: "8%" }}>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/95 backdrop-blur-sm mb-8"
              style={{
                whiteSpace: "nowrap",
                display: "inline-flex",
                alignItems: "center",
                width: "fit-content",
                maxWidth: "100%",
                padding: "6px 14px",
                borderRadius: "999px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse flex-shrink-0" />
              <span
                className="uppercase font-semibold text-[#0A0A0F]"
                style={{
                  fontFamily: "Satoshi",
                  fontWeight: 600,
                  fontSize: "9.5px",
                  letterSpacing: "0.06em",
                }}
              >
                Pinterest organic CPM is $0.12. Everyone else is asleep.
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="font-bold mb-6 text-[#0A0A0F]"
              style={{
                fontFamily: "Clash Display",
                fontSize: "clamp(38px, 5.5vw, 64px)",
                fontWeight: 800,
                lineHeight: "1.08",
                letterSpacing: "-0.03em",
              }}
            >
              Your product link.
              <br />
              30 days of Pinterest content.
              <br />5 minutes.
            </h1>

            {/* Subheadline */}
            <p
              className="text-[#3A3A3A] max-w-[540px] mb-10 leading-relaxed"
              style={{
                fontFamily: "Satoshi",
                fontSize: "19px",
                fontWeight: 400,
              }}
            >
              PinFlow uses AI to turn any URL into a full month of optimised
              Pinterest slideshows, descriptions, and scheduled posts —
              automatically. While your competitors fight over TikTok, you
              compound.
            </p>

            {/* Email Capture */}
            <div className="mb-8 max-w-[520px]">
              {submitted ? (
                <div className="bg-primary/10 border border-primary/30 rounded-full py-3 px-6 text-primary font-semibold">
                  🎉 You're on the waitlist!
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 rounded-full bg-white text-[#0A0A0F] border-[#E8E4DF] text-base px-6 placeholder:text-[#8A8A9A]"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="rounded-full h-12 px-8 shadow-[0_0_20px_rgba(230,0,35,0.3)] hover:shadow-[0_0_30px_rgba(230,0,35,0.4)] transition-shadow bg-[#E60023] text-white"
                  >
                    Join Waitlist
                  </Button>
                </form>
              )}
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <ImageWithFallback
                      src={avatar}
                      alt="User avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm text-[#3A3A3A]">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>{count} marketers already on the waitlist</span>
              </div>
            </div>
          </div>

          {/* Right Column - Pinterest Feed */}
          <div className="relative h-[600px] overflow-hidden">
            <PinterestFeedMockup />
          </div>
        </div>

        {/* Mobile: Centered Single Column */}
        <div className="md:hidden text-center py-12">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/95 backdrop-blur-sm mb-8"
            style={{
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              width: "fit-content",
              maxWidth: "100%",
              padding: "8px 16px",
              borderRadius: "999px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse flex-shrink-0" />
            <span
              className="uppercase font-semibold text-[#0A0A0F]"
              style={{
                fontFamily: "Satoshi",
                fontWeight: 600,
                fontSize: "9px",
                letterSpacing: "0.06em",
              }}
            >
              Pinterest organic CPM is $0.12. Everyone else is asleep.
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className="font-bold mb-6 text-[#0A0A0F] px-4"
            style={{
              fontFamily: "Clash Display",
              fontSize: "clamp(38px, 5.5vw, 64px)",
              fontWeight: 800,
              lineHeight: "1.08",
              letterSpacing: "-0.03em",
              wordBreak: "keep-all",
            }}
          >
            Your product link.
            <br />
            30 days of Pinterest content.
            <br />5 minutes.
          </h1>

          {/* Subheadline */}
          <p
            className="text-[#3A3A3A] max-w-[540px] mx-auto mb-10 leading-relaxed px-4"
            style={{
              fontFamily: "Satoshi",
              fontSize: "17px",
              fontWeight: 400,
            }}
          >
            PinFlow uses AI to turn any URL into a full month of optimised
            Pinterest slideshows, descriptions, and scheduled posts —
            automatically.
          </p>

          {/* Email Capture */}
          <div className="mb-8 px-4">
            {submitted ? (
              <div className="bg-primary/10 border border-primary/30 rounded-full py-3 px-6 text-primary font-semibold">
                🎉 You're on the waitlist!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full h-12 rounded-full bg-white text-[#0A0A0F] border-[#E8E4DF] text-base px-6 placeholder:text-[#8A8A9A]"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full h-12 px-8 shadow-[0_0_20px_rgba(230,0,35,0.3)] hover:shadow-[0_0_30px_rgba(230,0,35,0.4)] transition-shadow bg-[#E60023] text-white"
                >
                  Join Waitlist
                </Button>
              </form>
            )}
          </div>

          {/* Single Pinterest Pin Mockup */}
          <div className="w-[70%] mx-auto mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1542919901-ce575ee6e6e7?w=400&h=600&fit=crop"
              alt="Pinterest mockup"
              className="w-full h-auto object-cover"
              style={{ aspectRatio: "2/3" }}
            />
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-3 px-4">
            <div className="flex -space-x-2">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                >
                  <ImageWithFallback
                    src={avatar}
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-[#3A3A3A]">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>{count} on waitlist</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
