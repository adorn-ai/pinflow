import { Badge } from "./ui/badge";

export function ProductPreview() {
  return (
    <section className="py-24 bg-[#FAF9F7]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="text-[11px] uppercase tracking-[0.1em] font-semibold text-[#8A8A9A] mb-4">
            Early Access
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.02em] mb-6 text-[#0A0A0F]">
            Want to see it in action?
          </h2>
          <p className="text-lg text-[#3A3A3A] leading-relaxed">
            PinFlow is in final development. Join the waitlist and get first access,
            locked-in launch pricing, and a free onboarding call when we open the doors.
          </p>
        </div>

        {/* Blurred Dashboard Preview */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative rounded-3xl overflow-hidden border border-primary/20 transition-all duration-300"
            style={{
              background: "linear-gradient(145deg, #FFFFFF 0%, #FAF4F4 50%, #FDF0EE 100%)",
              boxShadow: "0 8px 60px rgba(230,0,35,0.15), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            {/* Mockup Content with Blur */}
            <div className="aspect-video bg-gradient-to-br from-card via-card-foreground/10 to-card p-12 backdrop-blur-sm">
              <div className="space-y-6 blur-sm">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="h-8 w-32 bg-card-foreground/20 rounded-lg" />
                  <div className="flex gap-2">
                    <div className="h-8 w-24 bg-card-foreground/20 rounded-lg" />
                    <div className="h-8 w-24 bg-primary/30 rounded-lg" />
                  </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-4">
                    <div className="h-6 w-48 bg-card-foreground/20 rounded" />
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl" />
                    <div className="space-y-2">
                      <div className="h-4 w-full bg-card-foreground/20 rounded" />
                      <div className="h-4 w-3/4 bg-card-foreground/20 rounded" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-6 w-32 bg-card-foreground/20 rounded" />
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-20 bg-card-foreground/10 rounded-lg border border-card-foreground/20"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Centered Badge Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Badge className="text-sm px-6 py-3 bg-primary text-white shadow-[0_0_30px_rgba(230,0,35,0.4)] border-primary/50">
                Early Access Opening Soon
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}