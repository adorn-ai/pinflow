import {
  Sparkles,
  Calendar,
  FileText,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react";

export function FeaturesBento() {
  const features = [
    {
      title: "AI Pin Generation",
      description: "Paste a URL, get a full slideshow in seconds",
      icon: Sparkles,
      size: "large",
      featured: true,
    },
    {
      title: "30-Day Auto Scheduling",
      description: "Your content pipeline, done for a month",
      icon: Calendar,
      size: "medium",
      featured: false,
    },
    {
      title: "SEO-Optimised Descriptions",
      description: "Pinterest searches your titles. We write ones that rank",
      icon: FileText,
      size: "medium",
      featured: false,
    },
    {
      title: "Multi-Account Support",
      description: "Run 5 accounts from one dashboard",
      icon: Users,
      size: "small",
      featured: false,
    },
    {
      title: "Performance Dashboard",
      description: "See which pins drive saves and clicks",
      icon: BarChart3,
      size: "small",
      featured: false,
    },
    {
      title: "Content That Compounds",
      description: "Every pin works for months, not days",
      icon: TrendingUp,
      size: "wide",
      featured: true,
    },
  ];

  return (
    <section className="py-24 bg-[#FAF9F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#8A8A9A] mb-4">
            Features
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6 text-[#0A0A0F]">
            Everything you need to run Pinterest on autopilot
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const gridClass = feature.featured
              ? "md:col-span-2 lg:col-span-2"
              : "md:col-span-1";

            return (
              <div
                key={index}
                className={`${gridClass} relative rounded-2xl p-8 border transition-all duration-300 hover:shadow-[0_8px_40px_rgba(180,100,100,0.10)] group overflow-hidden ${
                  feature.featured ? "border-primary/20" : "border-[#E8E4DF]"
                }`}
                style={{
                  background: "linear-gradient(145deg, #FFFFFF 0%, #FAF4F4 50%, #FDF0EE 100%)",
                  boxShadow: "0 4px 24px rgba(180,100,100,0.06), inset 0 1px 0 rgba(255,255,255,0.9)",
                }}
              >
                {/* Radial blush for featured cards */}
                {feature.featured && (
                  <div
                    className="absolute top-0 right-0 w-[60%] h-[60%] rounded-2xl opacity-30 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 100% 0%, #FFE8E8 0%, transparent 60%)",
                    }}
                  />
                )}

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 ${
                      feature.featured ? "bg-primary/15" : "bg-primary/10"
                    } rounded-xl flex items-center justify-center mb-6`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        feature.featured ? "text-primary" : "text-primary/80"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3 text-[#0A0A0F]">
                    {feature.title}
                  </h3>
                  <p className="text-[#3A3A3A] text-lg leading-relaxed">
                    {feature.description}
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