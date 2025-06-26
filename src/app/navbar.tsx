"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

// Navigation links from the church website structure
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/sermons", label: "Sermons" },
  { href: "/media", label: "Media" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

// Social media links from company profile
const socialLinks = [
  {
    href: "https://www.facebook.com/cemkharistemple/",
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/cemkharistemple/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@cemkharistemple7638",
    icon: FaYoutube,
    label: "YouTube",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="church-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Only */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/logo.png"
              alt="CEM-Kharis Temple Logo"
              width={800}
              height={800}
              className="h-11 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    isActive
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-200 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </nav>

          {/* Contact Info and CTA (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <FaPhone className="h-3 w-3" />
              <span>+233543150780</span>
            </div>
            <Button asChild size="sm" className="church-button-primary">
              <Link href="/contact">Join Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="flex items-center justify-center text-center">
                  <Image
                    src="/images/logo.png"
                    alt="CEM-Kharis Temple Logo"
                    width={40}
                    height={40}
                    className="h-10 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4 mt-8">
                {navigationLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-lg font-medium transition-colors duration-200 py-2 border-b border-border ${
                        isActive
                          ? "text-primary border-primary"
                          : "text-foreground hover:text-primary"
                      }`}
                    >
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Contact Information */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 text-sm">
                  <FaPhone className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-muted-foreground">+233543150780</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <FaEnvelope className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-muted-foreground">
                      info@kharistemple.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <FaMapMarkerAlt className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-muted-foreground">
                      Adenta Housing Down Near Aviation Roundabout,
                      Adenta-Accra, Ghana
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8">
                <p className="text-sm font-medium mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Live Stream Notice Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="church-container">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-2 text-sm">
              <span className="hidden sm:inline">🔴</span>
              <span className="font-medium">Watch Live Now!</span>
            </div>
            <Link
              href="https://youtu.be/2BU9oZ0VZ6Y"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:underline"
            >
              Join Our Live Stream →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
