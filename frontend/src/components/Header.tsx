import { Button } from "./ui/button";
import { PinFlowLogo } from "./PinFlowLogo";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist");
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(250,249,247,0.85)] backdrop-blur-[20px] border-b border-[#E8E4DF]"
          : "bg-[#FAF9F7] border-b border-[#E8E4DF]"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <PinFlowLogo size={28} />
            <span className="text-lg font-bold tracking-tight text-[#0A0A0F]">PinFlow</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm text-[#0A0A0F]/70 hover:text-[#0A0A0F] transition-colors font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm text-[#0A0A0F]/70 hover:text-[#0A0A0F] transition-colors font-medium"
            >
              How it works
            </button>
            <Button
              size="sm"
              onClick={scrollToWaitlist}
              className="rounded-full shadow-[0_0_20px_rgba(230,0,35,0.3)] hover:shadow-[0_0_25px_rgba(230,0,35,0.4)] transition-shadow bg-[#E60023] text-white"
            >
              Join Waitlist
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#0A0A0F]"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E8E4DF]">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-sm text-[#0A0A0F]/70 hover:text-[#0A0A0F] transition-colors text-left py-2 font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-sm text-[#0A0A0F]/70 hover:text-[#0A0A0F] transition-colors text-left py-2 font-medium"
              >
                How it works
              </button>
              <Button
                size="sm"
                onClick={scrollToWaitlist}
                className="rounded-full shadow-[0_0_20px_rgba(230,0,35,0.3)] hover:shadow-[0_0_25px_rgba(230,0,35,0.4)] transition-shadow w-full bg-[#E60023] text-white"
              >
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}