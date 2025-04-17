"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon, MenuIcon, XIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Introduction", href: "/" },
  { name: "Proposed Solution", href: "/solution" },
  { name: "Project Timeline", href: "/timeline" },
  { name: "Budget", href: "/budget" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Team", href: "/team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // After mounting, we can safely show the theme toggle
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">Sydek</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-foreground/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {mounted && (
            <Button
              className="h-10 w-10 rounded-md bg-transparent hover:bg-accent text-foreground"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
          )}
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-4">
          {mounted && (
            <Button
              className="h-10 w-10 rounded-md bg-transparent hover:bg-accent text-foreground"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md p-4 border-t">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                  pathname === link.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full" asChild>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact Us
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
