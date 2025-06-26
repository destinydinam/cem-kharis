"use client";

import { HeroSection } from "@/components/hero-section";
import { WelcomeSection } from "@/components/welcome-section";
import { ServiceTimesSection } from "@/components/service-times-section";
import Navbar from "./navbar";
import Footer from "./footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <WelcomeSection />

      {/* Service Times Section */}
      <ServiceTimesSection />

      {/* Ministry Programs Section */}
      {/* <MinistryProgramsSection /> */}

      {/* Recent Events Section */}
      {/* <RecentEventsSection /> */}

      {/* Contact Info Section */}
      {/* <ContactInfoSection /> */}

      <Footer />
    </main>
  );
}
