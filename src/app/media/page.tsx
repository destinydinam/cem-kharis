"use client";

import { motion } from "motion/react";
import { X } from "lucide-react";
import Image from "next/image";
import {
  FaPlay,
  FaExternalLinkAlt,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
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
import { useState } from "react";
import Link from "next/link";

// YouTube Video Modal Component
const VideoModal = ({
  videoId,
  isOpen,
  onClose,
  title,
}: {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold">{title}</h3>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

const featuredContent = [
  {
    id: 1,
    title: "Sunday Victory Service",
    description:
      "Join us for powerful worship and life-changing messages from Rev. Dr. Steve Mensah",
    type: "Live Service",
    platform: "YouTube",
    videoId: "2BU9oZ0VZ6Y", // Actual live stream from company profile
    thumbnail: "/images/blog-1.png",
  },
  {
    id: 2,
    title: "Teaching Service",
    description: "Deep Bible study and spiritual growth sessions every Tuesday",
    type: "Teaching",
    platform: "YouTube",
    videoId: "3PAkbdKbar4", // From company profile YouTube videos
    thumbnail: "/images/blog-2.png",
  },
  {
    id: 3,
    title: "Breakthrough Service",
    description: "Prayer, healing, and miraculous testimonies every Friday",
    type: "Prayer",
    platform: "YouTube",
    videoId: "y9GngU-qbys", // From company profile YouTube videos
    thumbnail: "/images/blog-3.png",
  },
];

const socialStats = [
  {
    platform: "YouTube",
    icon: FaYoutube,
    link: "https://www.youtube.com/@cemkharistemple7638",
    color: "text-red-600",
    description: "Subscribe for sermons and live streams",
  },
  {
    platform: "Facebook",
    icon: FaFacebookF,
    link: "https://www.facebook.com/cemkharistemple/",
    color: "text-blue-600",
    description: "Connect with our church community",
  },
  {
    platform: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/cemkharistemple/",
    color: "text-pink-600",
    description: "Daily inspiration and church updates",
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

export default function MediaPage() {
  const [selectedVideo, setSelectedVideo] = useState<{
    videoId: string;
    title: string;
  } | null>(null);

  const openVideo = (videoId: string, title: string) => {
    setSelectedVideo({ videoId, title });
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Video Modal */}
      <VideoModal
        videoId={selectedVideo?.videoId || ""}
        title={selectedVideo?.title || ""}
        isOpen={!!selectedVideo}
        onClose={closeVideo}
      />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" {...fadeInUp}>
            <Badge variant="outline" className="mb-6 text-sm px-4 py-2">
              Media & Sermons
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Watch & Connect
              <span className="text-primary block">From Anywhere</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Experience our services online, watch previous sermons, and stay
              connected with our church family through our digital platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild
              >
                <Link
                  href="https://youtu.be/2BU9oZ0VZ6Y"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPlay className="mr-2 h-4 w-4" />
                  Watch Live Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Service Times</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Featured Sermons & Messages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch our latest sermons and messages from Rev. Dr. Steve Mensah
              and experience the life-changing power of God&apos;s Word.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {featuredContent.map((content) => (
              <motion.div key={content.id} variants={staggerChild}>
                <Card
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group pt-0"
                  onClick={() => openVideo(content.videoId, content.title)}
                >
                  <div className="relative">
                    <Image
                      src={content.thumbnail}
                      alt={content.title}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary rounded-full p-3">
                        <FaPlay className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-primary text-white">
                      {content.type}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif line-clamp-2">
                      {content.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {content.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <FaYoutube className="h-4 w-4 text-red-600" />
                        <span>{content.platform}</span>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-primary"
                      >
                        <FaExternalLinkAlt className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section id="social-media" className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="text-center mb-16" {...fadeInUp}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow us on social media for daily inspiration, church updates,
              and community connections.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {socialStats.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div key={index} variants={staggerChild}>
                  <Card className="text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                        <Icon className={`h-8 w-8 ${social.color}`} />
                      </div>
                      <CardTitle className="text-xl font-serif">
                        {social.platform}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="mb-4">
                        {social.description}
                      </CardDescription>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        asChild
                      >
                        <Link
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt className="mr-2 h-3 w-3" />
                          Follow Us
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Never Miss a Message
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter for weekly sermon updates, event
              announcements, and spiritual encouragement delivered to your
              inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <FaEnvelope className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
