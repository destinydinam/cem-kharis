"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Heart, Users } from "lucide-react";
import { FaHome, FaCalendarAlt, FaHandsHelping } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export function WelcomeSection() {
  const galleryImages = [
    { src: "/images/gallery-3.png", alt: "Youth ministry activities" },
    { src: "/images/gallery-2.png", alt: "Community fellowship" },
    { src: "/images/gallery-1.png", alt: "Church congregation worship" },
    { src: "/images/gallery-4.png", alt: "Children's ministry" },
    { src: "/images/gallery-5.png", alt: "Church events" },
  ];

  return (
    <section id="welcome" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-serif">
                Church Family
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At CEM-Kharis Temple, we believe in the power of community, love,
              and faith. Our doors are always open to welcome you into our
              growing family.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Text Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-gray-900">
                  Our Mission & Vision
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Our Mission
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        We&apos;re helping people reconnect with God as a
                        Family! Every service, every ministry, every interaction
                        is designed to strengthen your relationship with God and
                        fellow believers.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Users className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Our Vision
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Making every parishioner a faithful person is our prized
                        goal. We strive to nurture spiritual growth and build
                        lasting relationships within our church community.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <FaHandsHelping className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Our Approach
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Through biblical teaching, loving fellowship, and
                        Spirit-led worship, we create an environment where faith
                        flourishes and families grow stronger.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="secondary"
                  asChild
                  className="w-full sm:flex-1 bg-white text-primary hover:bg-white/90 font-semibold"
                >
                  <Link href="/contact">
                    <Heart className="mr-2 h-4 w-4" />
                    Visit Us This Sunday
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="w-full sm:flex-1 border-2 border-white/80 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary transition-all duration-300 font-semibold"
                >
                  <Link href="/contact">
                    <Users className="mr-2 h-4 w-4" />
                    Learn More About Us
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Gallery Images */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                    index === 0 || index === 3 ? "row-span-2" : "aspect-square"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <br />
          <br />
          {/* Bottom Stats or Values */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Friendly Atmosphere */}
            <motion.div
              className="text-center md:text-left md:pr-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center md:items-start space-y-4">
                <div className="min-w-16 min-h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm mr-4  ">
                  <FaHome className="h-8 w-8 text-gray-800" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Friendly Atmosphere
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    We are happy to welcome anyone, with our community feeling
                    accepting of all kinds of people!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Interesting Events - Middle with borders */}
            <motion.div
              className="text-center md:text-left md:px-8 md:border-x border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center md:items-start space-y-4">
                <div className="min-w-16 min-h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm mr-4">
                  <FaCalendarAlt className="h-8 w-8 text-gray-800" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    Interesting Events
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Our church has a long schedule of fascinating and deeply
                    spiritual events, all to boost your serenity!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* New People */}
            <motion.div
              className="text-center md:text-left md:pl-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center md:items-start space-y-4">
                <div className="min-w-16 min-h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm mr-4">
                  <FaHandsHelping className="h-8 w-8 text-gray-800" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    New People
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Visit our church and meet dozens of new friends, all of whom
                    follow the "love thy neighbor" principle!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
