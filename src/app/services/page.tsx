"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUsers,
  FaHeart,
  FaBook,
  FaMusic,
  FaBolt,
  FaPhone,
  FaChurch,
  FaHandsHelping,
  FaChild,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "../navbar";
import Footer from "../footer";
import Link from "next/link";

const services = [
  {
    id: "sunday-victory",
    title: "Sunday Victory Service",
    time: "7:30 AM",
    day: "Sunday",
    duration: "2.5 hours",
    description:
      "Start your week with victory! Join our family for uplifting worship, powerful teaching, and community fellowship.",
    whatToExpect: [
      "Dynamic praise and worship with Kharis Praise team",
      "Life-changing messages from Rev. Dr. Steve Mensah",
      "Prayer for breakthrough and victory",
      "Children&apos;s ministry during service",
      "Fellowship and connection time",
    ],
    benefits: [
      "Experience God&apos;s presence in powerful worship",
      "Receive practical biblical wisdom for your week",
      "Connect with a loving church family",
      "Find hope and encouragement for life&apos;s challenges",
    ],
    icon: FaChurch,
    color: "bg-primary text-white",
    gradient: "from-primary to-primary/80",
  },
  {
    id: "teaching-service",
    title: "Teaching Service",
    time: "6:30 PM",
    day: "Tuesday",
    duration: "1.5 hours",
    description:
      "Dive deeper into God&apos;s Word with focused biblical teaching designed to transform your life and strengthen your faith.",
    whatToExpect: [
      "In-depth Bible study and exposition",
      "Interactive Q&A sessions",
      "Small group discussions",
      "Personal application and life transformation",
      "Take-home study materials",
    ],
    benefits: [
      "Build a solid foundation in biblical truth",
      "Grow in spiritual maturity and wisdom",
      "Ask questions and get biblical answers",
      "Connect with fellow believers in study",
    ],
    icon: FaBook,
    color: "bg-secondary text-gray-900",
    gradient: "from-secondary to-secondary/80",
  },
  {
    id: "breakthrough-service",
    title: "Breakthrough Service",
    time: "6:30 PM",
    day: "Friday",
    duration: "2 hours",
    description:
      "End your week with power! Experience breakthrough prayers, deliverance, and miraculous testimonies.",
    whatToExpect: [
      "Powerful worship and intercession",
      "Focused prayers for breakthrough",
      "Testimonies of God&apos;s miraculous power",
      "Personal ministry and prayer",
      "Prophetic ministry and direction",
    ],
    benefits: [
      "Break through spiritual barriers",
      "Receive healing and restoration",
      "Experience God&apos;s miraculous power",
      "Get equipped for spiritual warfare",
    ],
    icon: FaBolt,
    color: "bg-gray-900 text-white",
    gradient: "from-gray-900 to-gray-700",
  },
];

const specialPrograms = [
  {
    id: "youth-ministry",
    title: "Youth Ministry",
    description:
      "Empowering the next generation with biblical values and practical life skills",
    frequency: "Weekly",
    icon: FaChild,
  },
  {
    id: "kharis-praise-team",
    title: "Kharis Praise Team",
    description:
      "Join our worship team and use your musical gifts to glorify God",
    frequency: "Bi-weekly practice",
    icon: FaMusic,
  },
  {
    id: "rural-world-ministry",
    title: "Christ to the Rural World Ministry",
    description:
      "Bringing Jesus to rural communities with medical help, food, clothing, and Bibles",
    frequency: "Annual Outreach",
    icon: FaHandsHelping,
  },
  {
    id: "community-impact",
    title: "Community Impact",
    description:
      "Supporting the poor and needy in our community with practical help",
    frequency: "Ongoing",
    icon: FaHeart,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.2 } },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ServicesPage() {
  const [highlightedCard, setHighlightedCard] = useState<string | null>(null);

  // Handle hash navigation and highlighting
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && specialPrograms.some((program) => program.id === hash)) {
        setHighlightedCard(hash);

        // Scroll to the element with proper offset for full visibility
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const yOffset = -100; // Offset to show full card
            const y =
              element.getBoundingClientRect().top +
              window.pageYOffset +
              yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }, 100);

        // Remove highlight after 2 seconds
        setTimeout(() => {
          setHighlightedCard(null);
        }, 2000);
      }
    };

    // Handle initial load with hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" {...fadeInUp}>
            <Badge variant="outline" className="mb-6 text-sm px-4 py-2">
              Join Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Experience God&apos;s Presence
              <span className="text-primary block">Every Week</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Whether you&apos;re seeking victory, deeper understanding, or
              breakthrough, our services are designed to help you reconnect with
              God as part of our loving family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/contact">
                  Plan Your Visit
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Weekly Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Each service is carefully crafted to meet you where you are in
              your spiritual journey. Come as you are, leave transformed.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-1 gap-12 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div key={service.id} variants={staggerChild}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                    <div
                      className={`h-2 bg-gradient-to-r ${service.gradient}`}
                    />
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-3 rounded-full ${service.color} shadow-lg`}
                          >
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl font-serif text-gray-900">
                              {service.title}
                            </CardTitle>
                            <div className="flex items-center space-x-4 mt-2">
                              <div className="flex items-center space-x-1 text-sm text-gray-600">
                                <FaCalendarAlt className="h-4 w-4" />
                                <span>{service.day}s</span>
                              </div>
                              <div className="flex items-center space-x-1 text-sm text-gray-600">
                                <FaClock className="h-4 w-4" />
                                <span>{service.time}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Badge variant="secondary">{service.duration}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <CardDescription className="text-base text-gray-700 leading-relaxed">
                        {service.description}
                      </CardDescription>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <FaUsers className="h-4 w-4 mr-2 text-primary" />
                            What to Expect
                          </h4>
                          <ul className="space-y-2">
                            {service.whatToExpect.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-2 text-sm text-gray-600"
                              >
                                <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <FaHeart className="h-4 w-4 mr-2 text-primary" />
                            How You&apos;ll Benefit
                          </h4>
                          <ul className="space-y-2">
                            {service.benefits.map((benefit, i) => (
                              <li
                                key={i}
                                className="flex items-start space-x-2 text-sm text-gray-600"
                              >
                                <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Special Programs */}
      <section
        id="ministry-programs"
        className="py-24 lg:py-32 bg-gray-50 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Ministry Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond our regular services, we offer various ministry programs
              designed to help you grow, serve, and make a difference.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {specialPrograms.map((program) => {
              const Icon = program.icon;
              return (
                <motion.div key={program.id} variants={staggerChild}>
                  <Card
                    id={program.id}
                    className={`text-center hover:shadow-lg transition-all duration-300 h-full scroll-mt-24 ${
                      highlightedCard === program.id
                        ? "ring-4 ring-primary/50 shadow-xl bg-primary/5 scale-105"
                        : ""
                    }`}
                  >
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-serif">
                        {program.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm text-gray-600 mb-4">
                        {program.description}
                      </CardDescription>
                      <Badge variant="outline" className="text-xs">
                        {program.frequency}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* First Time Visitors */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              First Time Visiting?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We&apos;re excited to welcome you! Our church has a friendly
              atmosphere where we&apos;re happy to welcome anyone, with our
              community feeling accepting of all kinds of people. Come as you
              are - we can&apos;t wait to meet you.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaClock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Arrive Early
                </h3>
                <p className="text-sm text-gray-600">
                  Come 15-20 minutes early to find parking and get settled
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaUsers className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Meet Our Team
                </h3>
                <p className="text-sm text-gray-600">
                  Our welcome team will greet you and help you feel at home
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Come As You Are
                </h3>
                <p className="text-sm text-gray-600">
                  Dress comfortably - we care more about your heart than your
                  clothes
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/contact">
                  Plan Your Visit
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:+233543150780">
                  <FaPhone className="mr-2 h-4 w-4" />
                  Call Us: +233543150780
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Questions About Our Services?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re here to help! Contact us with any questions about our
              services, what to expect, or how to get involved.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <FaPhone className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600">+233543150780</p>
              </div>
              <div className="text-center">
                <FaUsers className="h-8 w-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  Adenta Housing Down Near Aviation Roundabout, Adenta-Accra,
                  Ghana
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <Link href="/contact">
                Get in Touch
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
