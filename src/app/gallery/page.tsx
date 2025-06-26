"use client";

import { motion } from "motion/react";
import {
  FaCamera,
  FaUsers,
  FaHeart,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaChurch,
  FaHandsHelping,
  FaChild,
  FaBook,
  FaPray,
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
import Image from "next/image";
import Navbar from "../navbar";
import Footer from "../footer";
import Link from "next/link";

const galleryImages = [
  {
    id: 1,
    src: "/images/gallery-1.png",
    title: "Sunday Victory Service",
    description: "Our church family gathered in worship and praise",
    category: "Worship",
    date: "January 2024",
  },
  {
    id: 2,
    src: "/images/gallery-2.png",
    title: "Christ to the Rural World Ministry",
    description: "Bringing Jesus to rural communities with practical help",
    category: "Outreach",
    date: "December 2023",
  },
  {
    id: 3,
    src: "/images/blog-1.png",
    title: "Youth Ministry",
    description: "Empowering young people with biblical values",
    category: "Youth",
    date: "November 2023",
  },
  {
    id: 4,
    src: "/images/gallery-4.png",
    title: "Teaching Service",
    description: "Diving deep into God's Word every Tuesday",
    category: "Teaching",
    date: "October 2023",
  },
  {
    id: 5,
    src: "/images/gallery-5.png",
    title: "Breakthrough Service",
    description: "Powerful prayer and worship moments every Friday",
    category: "Prayer",
    date: "September 2023",
  },
  {
    id: 6,
    src: "/images/gallery-3.png",
    title: "Church Events",
    description: "Special celebrations and community gatherings",
    category: "Events",
    date: "August 2023",
  },
];

const categoryIcons = {
  Worship: FaChurch,
  Outreach: FaHandsHelping,
  Youth: FaChild,
  Teaching: FaBook,
  Prayer: FaPray,
  Events: FaCalendarAlt,
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" {...fadeInUp}>
            <Badge variant="outline" className="mb-6 text-sm px-4 py-2">
              <FaCamera className="mr-2 h-4 w-4" />
              Photo Gallery
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Capturing God's Work
              <span className="text-primary block">In Our Community</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Experience the joy, worship, and fellowship that make CEM-Kharis
              Temple a true family where people reconnect with God and each
              other.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {galleryImages.map((image) => {
              const CategoryIcon =
                categoryIcons[image.category as keyof typeof categoryIcons] ||
                FaCamera;
              return (
                <motion.div
                  key={image.id}
                  variants={staggerChild}
                  className="group"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full pt-0">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <Badge
                        variant="secondary"
                        className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm flex items-center space-x-1"
                      >
                        <CategoryIcon className="h-3 w-3" />
                        <span>{image.category}</span>
                      </Badge>
                    </div>

                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                        <span className="flex items-center space-x-1">
                          <FaCalendarAlt className="h-3 w-3" />
                          <span>{image.date}</span>
                        </span>
                      </div>
                      <CardTitle className="text-xl font-serif">
                        {image.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {image.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Be Part of Our Story
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              These moments capture just a glimpse of the love, joy, and
              transformation happening at CEM-Kharis Temple. Come and create new
              memories with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/contact">
                  <FaUsers className="mr-2 h-4 w-4" />
                  Join Our Family
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  <FaMapMarkerAlt className="mr-2 h-4 w-4" />
                  Visit Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
