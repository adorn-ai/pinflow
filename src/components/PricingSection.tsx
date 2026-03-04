import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/mo",
      features: [
        "1 Pinterest account",
        "5 pins/month",
        "Manual scheduling",
        "See the magic first",
      ],
      popular: false,
      cta: "Get Started Free",
      guarantee: "No credit card required",
    },
    {
      name: "Starter",
      price: "$19",
      period: "/mo",
      features: [
        "1 Pinterest account",
        "60 pins/month",
        "Auto-scheduling",
        "Basic analytics",
      ],
      popular: false,
      cta: "Lock In $19/mo",
      guarantee: "Price guaranteed for waitlist members only",
    },
    {
      name: "Growth",
      price: "$49",
      period: "/mo",
      features: [
        "5 Pinterest accounts",
        "200 pins/month",
        "Auto-scheduling",
        "Performance dashboard",
        "Priority support",
      ],
      popular: true,
      cta: "Lock In $49/mo",
      guarantee: "Price guaranteed for waitlist members only",
    },
    {
      name: "Agency",
      price: "$149",
      period: "/mo",
      features: [
        "Unlimited accounts",
        "Unlimited pins",
        "White-label exports",
        "Bulk scheduling",
        "Priority support",
        "Dedicated account manager",
      ],
      popular: false,
      cta: "Lock In $149/mo",
      guarantee: "Price guaranteed for waitlist members only",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#FAF9F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#8A8A9A] mb-4">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6 text-[#0A0A0F]">
            Simple pricing. Scales with your growth.
          </h2>
          <p className="text-lg text-[#3A3A3A] max-w-2xl mx-auto">
            Start free. Waitlist members lock in paid prices forever — they go up at launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto max-w-7xl">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-12 transition-all duration-300 ${
                plan.popular
                  ? "bg-[#FFF5F5] border-[1.5px] border-[#E60023] shadow-[0_8px_40px_rgba(230,0,35,0.08)] lg:scale-105"
                  : "bg-[#FAF9F7] border border-[#E8E4DF] shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
              } hover:shadow-[0_12px_50px_rgba(180,100,100,0.12)]`}
              style={
                !plan.popular
                  ? {
                      background:
                        "linear-gradient(145deg, #FFFFFF 0%, #FAF4F4 50%, #FDF0EE 100%)",
                      boxShadow:
                        "0 8px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                    }
                  : {
                      boxShadow:
                        "0 8px 40px rgba(230,0,35,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
                    }
              }
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-white shadow-[0_0_20px_rgba(230,0,35,0.4)] border-primary/50 px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              {/* Radial blush for popular card */}
              {plan.popular && (
                <div
                  className="absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl opacity-40 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 100% 0%, #FFE8E8 0%, transparent 60%)",
                  }}
                />
              )}

              {/* Plan Header */}
              <div className="text-center mb-10 relative">
                <h3 className="text-[22px] font-bold mb-6 text-[#0A0A0F]">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[62px] font-bold text-[#0A0A0F] leading-none">
                    {plan.price}
                  </span>
                  <span className="text-xl text-[#3A3A3A]">{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 relative">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center ${
                        plan.popular ? "bg-primary" : "bg-[#0A0A0F]/20"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.popular ? "text-white" : "text-[#0A0A0F]"
                        }`}
                      />
                    </div>
                    <span className="text-[16px] text-[#3A3A3A] leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full transition-all duration-300 relative font-semibold ${
                  plan.popular
                    ? "bg-[#E60023] hover:bg-[#E60023]/90 text-white shadow-[0_4px_20px_rgba(230,0,35,0.3)] hover:shadow-[0_6px_30px_rgba(230,0,35,0.4)]"
                    : "bg-[#0A0A0F] hover:bg-[#0A0A0F]/90 text-white"
                }`}
                style={{
                  borderRadius: "999px",
                  height: "54px",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                  padding: "0 20px",
                  whiteSpace: "nowrap",
                }}
              >
                {plan.cta}
              </Button>

              {/* Guarantee Text */}
              <p className="text-xs text-[#8A8A9A] text-center mt-5 relative leading-relaxed">
                {plan.guarantee}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}