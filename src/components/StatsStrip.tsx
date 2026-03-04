import { Sparkles } from "lucide-react";

export function StatsStrip() {
  const stats = [
    { platform: "Twitter content", lifespan: "dies in 18 minutes", highlight: false },
    { platform: "TikTok content", lifespan: "dies in 3-7 days", highlight: false },
    { platform: "Instagram content", lifespan: "dies in 48 hours", highlight: false },
    { platform: "Pinterest content", lifespan: "lives 4-6 months", highlight: true },
  ];

  return (
    <section className="py-12 border-y border-[#E8E4DF] bg-[#FAF9F7]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:divide-x divide-[#E8E4DF]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center ${
                stat.highlight
                  ? "relative"
                  : ""
              }`}
            >
              {stat.highlight && (
                <div
                  className="absolute inset-0 rounded-lg blur-2xl opacity-10"
                  style={{
                    background: "linear-gradient(135deg, #E60023, #FF6B9D)",
                  }}
                />
              )}
              <div className="relative">
                <div
                  className={`text-sm uppercase tracking-[0.1em] font-semibold mb-2 ${
                    stat.highlight ? "text-primary" : "text-[#8A8A9A]"
                  }`}
                >
                  {stat.platform}
                </div>
                <div
                  className={`text-lg font-medium flex items-center justify-center gap-2 ${
                    stat.highlight ? "text-[#0A0A0F]" : "text-[#3A3A3A]"
                  }`}
                >
                  {stat.lifespan}
                  {stat.highlight && <Sparkles className="w-4 h-4 text-primary" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}