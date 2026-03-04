import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useWaitlist } from "../contexts/WaitlistContext";
import { useState } from "react";
import confetti from "canvas-confetti";

export function FinalCTA() {
  const { count, incrementCount } = useWaitlist();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const avatars = [
    "https://images.unsplash.com/photo-1655249481446-25d575f1c054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbiUyMGhlYWRzaG90fGVufDF8fHx8MTc3MjEyMTAxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1573497620166-aef748c8c792?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGVudHJlcHJlbmV1ciUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjE3MjcxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758887261865-a2b89c0f7ac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG93bmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMTgxNDQ0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758525589763-b9ad2a75bfe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzIxMDg4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1617386124435-9eb3935b1e11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBwb3J0cmFpdCUyMHNtaWxlfGVufDF8fHx8MTc3MjE4MTQ0NXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1706824265660-5ca5effaf122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMGZlbWFsZXxlbnwxfHx8fDE3NzIxMDAyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
  
      try {
        const apiUrl = import.meta.env.VITE_PUBLIC_API_URL || '';
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
        colors: ['#E60023', '#FF6B9D', '#FFC8AA', '#FFFFFF']
      });
  
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="waitlist" className="py-32 relative overflow-hidden bg-[#FAF9F7]">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: "radial-gradient(circle, #E60023 0%, #FF6B9D 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6 text-[#0A0A0F]">
          The window is open. For now.
        </h2>

        <p className="text-lg text-[#3A3A3A] max-w-[520px] mx-auto mb-10 leading-relaxed">
          Pinterest organic reach is at an all-time high and nobody is competing for
          it. The brands that move first build distribution everyone else will pay to
          catch up to. Get early access to PinFlow before we open publicly.
        </p>

        {/* Email Capture */}
        <div className="max-w-[480px] mx-auto mb-8">
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
                className="rounded-full h-12 px-8 shadow-[0_0_20px_rgba(230,0,35,0.3)] hover:shadow-[0_0_30px_rgba(230,0,35,0.4)] transition-shadow"
              >
                Join the Waitlist
              </Button>
            </form>
          )}
        </div>

        {/* Social Proof */}
        <div className="flex items-center justify-center gap-3">
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
    </section>
  );
}