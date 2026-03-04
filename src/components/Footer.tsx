import { PinFlowLogo } from "./PinFlowLogo";

export function Footer() {
  return (
    <footer className="border-t border-[#E8E4DF] py-8 bg-[#FAF9F7]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <PinFlowLogo size={24} />
            <span className="font-bold tracking-tight text-[#0A0A0F]">PinFlow</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-[#8A8A9A]">
            <a href="#" className="hover:text-[#0A0A0F] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#0A0A0F] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#0A0A0F] transition-colors">
              Contact
            </a>
          </div>

          {/* Tagline */}
          <div className="text-sm text-[#8A8A9A]">
            Made for marketers who think ahead.
          </div>
        </div>
      </div>
    </footer>
  );
}