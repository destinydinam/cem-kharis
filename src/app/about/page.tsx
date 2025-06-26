"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
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
import {
  Heart,
  Users,
  Globe,
  BookOpen,
  Quote,
  Award,
  Target,
  Lightbulb,
  HandHeart,
  Crown,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.2 } },
};

// Published books from company profile
const publishedBooks = [
  "Bone of My Bones",
  "Life Changing Decisions",
  "Reclaiming your Inheritance",
  "7 Things the Anointing Will Do for You",
  "Go to Sleep after You Have Sown a Good Seed",
];

// Personal qualities from company profile
const founderQualities = [
  {
    title: "Humble Servant of God",
    description: "Loved by many colleagues and Pastors around the world",
    icon: Heart,
  },
  {
    title: "Simple & Peace-Loving",
    description: "Open to all persons regardless of social status or standing",
    icon: Users,
  },
  {
    title: "Compassionate & Kind",
    description: "Large heart for the poor and needy in our communities",
    icon: HandHeart,
  },
  {
    title: "Passionate Evangelist",
    description:
      "Dedicated to reaching the unsaved and neglected in rural areas",
    icon: Globe,
  },
];

// Ministry focus areas from company profile
const ministryFocus = [
  {
    title: "Rural Outreach",
    description:
      "Spearheads 'Christ to the Rural World Ministry' bringing Jesus to rural communities",
    details: [
      "Free medical help",
      "Food distribution",
      "Clothing assistance",
      "Bibles and books",
      "Spiritual care",
    ],
    icon: Globe,
  },
  {
    title: "Community Empowerment",
    description: "Empowers the poor to change their situation and environment",
    details: [
      "Skills training",
      "Financial literacy",
      "Business support",
      "Educational assistance",
      "Leadership development",
    ],
    icon: Target,
  },
  {
    title: "Youth Development",
    description:
      "Teaching on youth empowerment to make a difference in their generation",
    details: [
      "Mentorship programs",
      "Career guidance",
      "Spiritual formation",
      "Leadership training",
      "Life skills",
    ],
    icon: Users,
  },
  {
    title: "Teaching Ministry",
    description:
      "Radio teaching and conference speaking with passion and understanding",
    details: [
      "Sweet Melodies FM",
      "International conferences",
      "Bible teaching",
      "Prayer seminars",
      "Evangelism training",
    ],
    icon: BookOpen,
  },
];

// Core values from company profile
const coreValues = [
  {
    title: "Family Unity",
    description: "We're helping people reconnect with God as a Family!",
    icon: Heart,
  },
  {
    title: "Faithful Conversion",
    description:
      "Making every parishioner a faithful person is our prized goal",
    icon: Crown,
  },
  {
    title: "Global Mission",
    description: "Apostolic ministry spanning continents and nations worldwide",
    icon: Globe,
  },
  {
    title: "Community Care",
    description: "Doors always open for those in need with caring hearts",
    icon: HandHeart,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/5 overflow-hidden">
        <div className="church-container">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6">Our Story</Badge>
            <h1 className="text-4xl md:text-6xl font-bold church-heading mb-6">
              About CEM-Kharis Temple
            </h1>
            <p className="text-xl church-body max-w-3xl mx-auto leading-relaxed">
              Founded by Rev. Dr. Steve Mensah, we are committed to helping
              people reconnect with God as a family while making every
              parishioner a faithful person.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="church-section bg-white">
        <div className="church-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInLeft}>
              <div className="relative">
                <Image
                  src="/images/revsteve.png"
                  alt="Rev. Dr. Steve Mensah - General Overseer"
                  width={800}
                  height={800}
                  className="rounded-xl object-cover w-full h-96 lg:h-[500px]"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-6 border">
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">
                      General Overseer
                    </div>
                    <div className="text-lg font-bold text-primary">
                      Rev. Dr. Steve Mensah
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInRight}>
              <Badge className="mb-4">Our Founder</Badge>
              <h2 className="text-3xl md:text-4xl font-bold church-heading mb-6">
                Rev. Dr. Steve Mensah
              </h2>
              <p className="text-lg church-body mb-6">
                Rev. Steve Mensah is the General Overseer of the Charismatic
                Evangelistic Ministry (CEM) in Accra, Ghana. He is one of the
                Great Sons of Ghana the Lord has raised and is using greatly to
                affect lives not only in Ghana but around the world.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="church-body">
                      He is a great conference speaker on Evangelism, Prayer,
                      the Word and many more
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="church-body">
                      His Apostolic Ministry has taken him to continents and
                      nations around the world to bless and strengthen the body
                      of Christ
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="church-body">
                      Regular teaching on Sweet Melodies FM radio with passion,
                      simplicity, and understanding
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <blockquote className="text-lg font-medium mb-4 italic">
                  "Very approachable regardless of social status or standing,
                  with a large heart for the poor and needy"
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership & Ministry */}
      <section className="church-section bg-neutral-50">
        <div className="church-container">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-bold church-heading mb-6">
                  Ministry & Service
                </h3>
                <div className="space-y-4 church-body">
                  <p>
                    Under Rev. Dr. Steve Mensah's leadership, CEM-Kharis Temple
                    has grown into a vibrant community that serves both locally
                    and internationally. His ministry focuses on practical
                    biblical teaching and community outreach.
                  </p>
                  <p>
                    Through regular radio teachings on Sweet Melodies FM, the
                    ministry reaches many with simple, understandable messages
                    of hope and faith.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold church-heading mb-6">
                  Published Works
                </h3>
                <div className="church-body">
                  <p className="mb-4">
                    Rev. Dr. Steve Mensah has authored several books that focus
                    on spiritual growth and practical Christian living,
                    including:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    {publishedBooks.map((book, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-primary">•</span>
                        <span>{book}</span>
                      </li>
                    ))}
                    <li className="flex items-center space-x-2 italic text-gray-500">
                      <span className="text-primary">•</span>
                      <span>And several other inspirational works</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="church-section bg-white">
        <div className="church-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div {...fadeInLeft}>
              <Badge className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold church-heading mb-6">
                We're helping people reconnect with God as a Family!
              </h2>
              <p className="text-lg church-body mb-8">
                This is more than just our mission statement - it's the
                heartbeat of everything we do. We believe that church should
                feel like coming home to family, where every person is welcomed,
                loved, and cared for.
              </p>

              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Family-Centered Approach
                </h3>
                <p className="church-body">
                  We create an environment where people of all backgrounds can
                  experience God's love through genuine community and caring
                  relationships.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeInRight}>
              <Badge className="mb-4">Our Vision</Badge>
              <h2 className="text-3xl md:text-4xl font-bold church-heading mb-6">
                Making every parishioner a faithful person
              </h2>
              <p className="text-lg church-body mb-8">
                Our prized goal is transformation - not just attendance, but
                genuine spiritual growth and faithful living that impacts every
                area of life.
              </p>

              <div className="bg-secondary/10 rounded-xl p-6 border border-secondary/30">
                <Crown className="h-8 w-8 text-secondary-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Faithful Transformation
                </h3>
                <p className="church-body">
                  We're committed to walking alongside each person in their
                  spiritual journey, helping them grow in faith and become all
                  that God has called them to be.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="church-section bg-primary text-white">
        <div className="church-container text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Come and Be Part of Our Family
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Experience the love, community, and spiritual growth that comes
              from being part of the CEM-Kharis Temple family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Join Our Family
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-primary hover:bg-white hover:text-primary"
              >
                <Link href="/services">
                  Our Services
                  <Clock className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
