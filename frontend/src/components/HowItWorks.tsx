import { Link, Image, Calendar } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Link,
      title: "Paste any URL",
      description: "Product page, affiliate link, or keyword",
    },
    {
      number: "02",
      icon: Image,
      title: "AI generates your full pin set",
      description: "Images, text overlays, titles, descriptions, SEO tags",
    },
    {
      number: "03",
      icon: Calendar,
      title: "Auto-schedules 30 days of posts",
      description: "To your Pinterest account",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#FAF9F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#8A8A9A] mb-4">
            The Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] text-[#0A0A0F]">
            How PinFlow Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative rounded-2xl p-8 border border-[#E8E4DF] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(180,100,100,0.10)] group"
                style={{
                  background: "linear-gradient(145deg, #FFFFFF 0%, #FAF4F4 50%, #FDF0EE 100%)",
                  boxShadow: "0 4px 24px rgba(180,100,100,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                {/* Background Step Number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-[#0A0A0F]/5 select-none">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <div className="relative">
                  <div className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#8A8A9A] mb-3">
                    Step {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0A0A0F]">{step.title}</h3>
                  <p className="text-[#3A3A3A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}