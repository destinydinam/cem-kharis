"use client";

import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaDownload,
  FaVolumeUp,
  FaVolumeMute,
  FaClock,
  FaCalendarAlt,
  FaUser,
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

// Audio Player Component
const AudioPlayer = ({
  audioSrc,
  title,
  isActive,
  onPlay,
}: {
  audioSrc: string;
  title: string;
  isActive: boolean;
  onPlay: () => void;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [, setIsLoaded] = useState(false);

  // Reset player when switching between sermons
  useEffect(() => {
    if (!isActive && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isActive]);

  // Reset states when audio source changes
  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setIsLoaded(false);
  }, [audioSrc]);

  // Update time and duration
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (audio.currentTime !== undefined && !isNaN(audio.currentTime)) {
        setCurrentTime(audio.currentTime);
      }
    };

    const updateDuration = () => {
      if (audio.duration !== undefined && !isNaN(audio.duration)) {
        setDuration(audio.duration);
        setIsLoaded(true);
      }
    };

    const handleEnded = () => setIsPlaying(false);

    const handleLoadedData = () => {
      if (audio.duration !== undefined && !isNaN(audio.duration)) {
        setDuration(audio.duration);
        setIsLoaded(true);
      }
    };

    const handleCanPlay = () => setIsLoaded(true);

    // Add event listeners
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("loadeddata", handleLoadedData);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("ended", handleEnded);

    // Force load metadata if already loaded
    if (audio.readyState >= 1 && audio.duration && !isNaN(audio.duration)) {
      setDuration(audio.duration);
      setIsLoaded(true);
    }

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("loadeddata", handleLoadedData);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioSrc]); // Add audioSrc as dependency to re-setup listeners when audio changes

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      onPlay(); // Notify parent to stop other players
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const newTime = (parseFloat(e.target.value) / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    const newVolume = parseFloat(e.target.value) / 100;

    if (audio) {
      audio.volume = newVolume;
    }
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = volume;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-4">
      <audio ref={audioRef} src={audioSrc} preload="metadata" key={audioSrc} />

      {/* Main Controls */}
      <div className="flex items-center space-x-4">
        <Button
          onClick={togglePlay}
          size="lg"
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90"
        >
          {isPlaying ? (
            <FaPause className="h-5 w-5" />
          ) : (
            <FaPlay className="h-5 w-5 ml-0.5" />
          )}
        </Button>

        <div className="flex-1">
          <p className="font-medium text-gray-900 truncate">{title}</p>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="relative">
          <div className="w-full h-2 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-150 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={progressPercentage}
            onChange={handleSeek}
            className="absolute top-0 left-0 w-full h-2 opacity-0 cursor-pointer"
          />
        </div>
      </div>

      {/* Volume Control */}
      <div className="flex items-center space-x-2">
        <Button
          onClick={toggleMute}
          variant="ghost"
          size="sm"
          className="w-8 h-8 p-0"
        >
          {isMuted || volume === 0 ? (
            <FaVolumeMute className="h-4 w-4" />
          ) : (
            <FaVolumeUp className="h-4 w-4" />
          )}
        </Button>
        <div className="relative w-20">
          <div className="w-full h-1 bg-gray-200 rounded-lg overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-150 ease-out"
              style={{ width: `${isMuted ? 0 : volume * 100}%` }}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={isMuted ? 0 : volume * 100}
            onChange={handleVolumeChange}
            className="absolute top-0 left-0 w-full h-1 opacity-0 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

// Sample sermon data - replace with actual audio files
const sermons = [
  {
    id: 1,
    title: "Walking in Divine Purpose",
    speaker: "Rev. Dr. Steve Mensah",
    date: "December 15, 2024",
    duration: "45:30",
    series: "Purpose & Destiny",
    audioSrc: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3", // Free sample audio
    description:
      "Discovering God&apos;s unique plan for your life and walking confidently in His purpose.",
    tags: ["Purpose", "Destiny", "Faith"],
  },
  {
    id: 2,
    title: "The Power of Persistent Prayer",
    speaker: "Rev. Dr. Steve Mensah",
    date: "December 8, 2024",
    duration: "52:15",
    series: "Prayer Life",
    audioSrc: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3", // Free sample MP3
    description:
      "Understanding the importance of consistency in prayer and breakthrough.",
    tags: ["Prayer", "Breakthrough", "Persistence"],
  },
  {
    id: 3,
    title: "Living Above Circumstances",
    speaker: "Rev. Dr. Steve Mensah",
    date: "December 1, 2024",
    duration: "48:20",
    series: "Victory Series",
    audioSrc: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3", // Free church bells sample
    description:
      "How to maintain faith and joy regardless of life&apos;s challenges.",
    tags: ["Victory", "Faith", "Overcoming"],
  },
  {
    id: 4,
    title: "The Heart of Worship",
    speaker: "Rev. Dr. Steve Mensah",
    date: "November 24, 2024",
    duration: "41:45",
    series: "Worship & Praise",
    audioSrc: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3", // Free sample MP3
    description:
      "Understanding true worship and cultivating a heart that honors God.",
    tags: ["Worship", "Praise", "Heart"],
  },
  {
    id: 5,
    title: "Financial Stewardship",
    speaker: "Rev. Dr. Steve Mensah",
    date: "November 17, 2024",
    duration: "39:30",
    series: "Kingdom Principles",
    audioSrc: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3", // Free bell sample
    description:
      "Biblical principles for managing finances and experiencing God&apos;s provision.",
    tags: ["Stewardship", "Finances", "Provision"],
  },
  {
    id: 6,
    title: "Building Strong Relationships",
    speaker: "Rev. Dr. Steve Mensah",
    date: "November 10, 2024",
    duration: "44:15",
    series: "Relationships",
    audioSrc: "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3", // Free sample MP3
    description:
      "God&apos;s design for healthy relationships in marriage, family, and community.",
    tags: ["Relationships", "Family", "Community"],
  },
];

// Animation variants
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

export default function SermonsPage() {
  const [activePlayer, setActivePlayer] = useState<number | null>(null);

  const handlePlay = (sermonId: number) => {
    setActivePlayer(sermonId);
  };

  const downloadSermon = (audioSrc: string, title: string) => {
    // Create a temporary link element for download
    const link = document.createElement("a");
    link.href = audioSrc;
    link.download = `${title.replace(/[^a-zA-Z0-9]/g, "_")}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-4xl mx-auto" {...fadeInUp}>
            <Badge variant="outline" className="mb-6 text-sm px-4 py-2">
              Audio Sermons
            </Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
              Listen & Learn
              <span className="text-primary block">God&apos;s Word</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Access our collection of powerful sermons and teachings from Rev.
              Dr. Steve Mensah. Listen online or download for offline
              inspiration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sermons Collection */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {sermons.map((sermon) => (
              <motion.div key={sermon.id} variants={staggerChild}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between space-y-4 md:space-y-0">
                      <div className="flex-1">
                        <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                          {sermon.title}
                        </CardTitle>
                        <CardDescription className="text-lg text-gray-600 mb-4">
                          {sermon.description}
                        </CardDescription>

                        {/* Sermon Details */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-2">
                            <FaUser className="h-4 w-4" />
                            <span>{sermon.speaker}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FaCalendarAlt className="h-4 w-4" />
                            <span>{sermon.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <FaClock className="h-4 w-4" />
                            <span>{sermon.duration}</span>
                          </div>
                        </div>

                        {/* Series Badge */}
                        <Badge variant="secondary" className="mb-4">
                          {sermon.series}
                        </Badge>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          {sermon.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Download Button */}
                      <div className="flex-shrink-0">
                        <Button
                          onClick={() =>
                            downloadSermon(sermon.audioSrc, sermon.title)
                          }
                          variant="outline"
                          size="sm"
                          className="flex items-center space-x-2"
                        >
                          <FaDownload className="h-4 w-4" />
                          <span>Download</span>
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    {/* Audio Player */}
                    <AudioPlayer
                      audioSrc={sermon.audioSrc}
                      title={sermon.title}
                      isActive={activePlayer === sermon.id}
                      onPlay={() => handlePlay(sermon.id)}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div className="text-center max-w-3xl mx-auto" {...fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
              Stay Connected to God&apos;s Word
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our podcast or visit us in person to experience the
              full power of worship and fellowship at CEM-Kharis Temple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <a href="/contact">Visit Our Church</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/services">View Service Times</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
