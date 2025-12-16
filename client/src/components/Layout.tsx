import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Retreats", href: "/retreats" },
    { name: "Philosophy", href: "/philosophy" },
    { name: "About", href: "/about" },
    { name: "Journal", href: "/journal" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/20">
      {/* Navigation */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b border-transparent",
          isScrolled ? "bg-background/90 backdrop-blur-md py-4 border-border/40" : "bg-transparent py-6"
        )}
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <a className="font-serif text-2xl md:text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              7point83<span className="text-primary">.</span>
            </a>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className={cn(
                  "text-sm font-medium tracking-wide uppercase hover:text-primary transition-colors relative group",
                  location === link.href ? "text-primary" : "text-foreground/80"
                )}>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </Link>
            ))}
            <Button variant="default" className="rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6">
              Apply Now
            </Button>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href}>
            <a className="font-serif text-4xl font-light hover:text-primary transition-colors">
              {link.name}
            </a>
          </Link>
        ))}
        <Button size="lg" className="mt-8 rounded-none bg-primary text-primary-foreground px-8 text-lg">
          Apply Now
        </Button>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-20 border-t border-white/10">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
          <div className="md:col-span-2 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Realign your rhythm with the Earth's heartbeat.
            </h2>
            <div className="flex gap-4 pt-4">
              <Button variant="outline" className="rounded-none border-white/20 text-white hover:bg-white hover:text-black transition-colors">
                Explore Retreats
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-white/40">Explore</h3>
            <ul className="space-y-3">
              <li><Link href="/retreats"><a className="hover:text-primary transition-colors">Retreats</a></Link></li>
              <li><Link href="/philosophy"><a className="hover:text-primary transition-colors">Philosophy</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
              <li><Link href="/journal"><a className="hover:text-primary transition-colors">Journal</a></Link></li>
              <li><Link href="/faq"><a className="hover:text-primary transition-colors">FAQs</a></Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-white/40">Contact</h3>
            <ul className="space-y-3 text-white/80">
              <li>hello@7point83.club</li>
              <li>+91 80 1234 5678</li>
              <li className="pt-4">
                <span className="block text-white/40 text-xs mb-1">Visiting</span>
                Bengaluru + Rotating India Properties
              </li>
            </ul>
            <div className="pt-4 flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">IG</div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">LI</div>
            </div>
          </div>
        </div>
        
        <div className="container mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 uppercase tracking-wider">
          <p>© 2025 7point83 Club. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy"><a className="hover:text-white transition-colors">Privacy</a></Link>
            <Link href="/terms"><a className="hover:text-white transition-colors">Terms</a></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
