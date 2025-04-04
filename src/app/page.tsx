"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Pause, Play, NotebookIcon as Lotus, Feather, Heart, BookOpen } from "lucide-react"

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [timer, setTimer] = useState(300) // 5 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(300) // Track time left
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const meditationRef = useRef(null)
  const articlesRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true })
  const meditationInView = useInView(meditationRef, { once: true })
  const articlesInView = useInView(articlesRef, { once: true })

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Timer logic
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current as NodeJS.Timeout)
            setIsPlaying(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying])

  // Toggle play/pause
  const toggleTimer = () => {
    setIsPlaying(!isPlaying)
  }

  // Reset timer when duration changes
  useEffect(() => {
    setTimeLeft(timer)
    setIsPlaying(false)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }, [timer])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const features = [
    {
      title: "Daily Meditation",
      description: "Guided sessions to help you find inner peace and mindfulness in your daily routine.",
      icon: <Lotus className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Spiritual Readings",
      description: "Curated content from various spiritual traditions to expand your understanding.",
      icon: <BookOpen className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Mindful Living",
      description: "Practical tips and techniques for bringing spirituality into everyday life.",
      icon: <Feather className="h-10 w-10 text-purple-500" />,
    },
    {
      title: "Community Connection",
      description: "Connect with like-minded individuals on their spiritual journey.",
      icon: <Heart className="h-10 w-10 text-purple-500" />,
    },
  ]

  const articles = [
    {
      title: "Finding Your Inner Peace",
      excerpt: "Discover techniques to quiet your mind and connect with your inner self.",
      image: "/placeholder.svg?height=200&width=400",
      slug: "finding-inner-peace",
    },
    {
      title: "The Power of Gratitude",
      excerpt: "Learn how practicing gratitude can transform your spiritual journey.",
      image: "/placeholder.svg?height=200&width=400",
      slug: "power-of-gratitude",
    },
    {
      title: "Ancient Wisdom for Modern Times",
      excerpt: "How timeless spiritual teachings can guide us through contemporary challenges.",
      image: "/placeholder.svg?height=200&width=400",
      slug: "ancient-wisdom",
    },
  ]

  // Calculate progress percentage for the timer
  const progress = ((timer - timeLeft) / timer) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/80 to-blue-100/80" />
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Serene background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          className="max-w-4xl text-center z-10"
          variants={containerVariants}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
        >
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-bold text-purple-900 mb-6">
            Begin Your Spiritual Journey
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-purple-700 mb-8">
            Discover mindfulness, inner peace, and spiritual growth through guided practices and wisdom.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-lg">
              Start Your Journey
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Nurture Your Spirit</h2>
            <p className="text-lg text-purple-700 max-w-2xl mx-auto">
              Our platform offers various practices and resources to support your spiritual growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="flex items-center justify-center pt-8">{feature.icon}</CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="text-xl mb-2 text-purple-800">{feature.title}</CardTitle>
                    <CardDescription className="text-purple-600">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Meditation Timer Section */}
      <section ref={meditationRef} className="py-20 px-4 bg-gradient-to-r from-purple-100 to-blue-100">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={meditationInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Meditation Timer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-purple-700 mb-10">
            Take a moment to breathe and center yourself with our meditation timer.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md mx-auto"
          >
            <div className="relative mb-8 flex items-center justify-center">
              <svg className="w-48 h-48">
                <circle
                  className="text-gray-200"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  r="70"
                  cx="96"
                  cy="96"
                />
                <circle
                  className="text-purple-500"
                  strokeWidth="8"
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="70"
                  cx="96"
                  cy="96"
                  strokeDasharray={440}
                  strokeDashoffset={440 - (440 * progress) / 100}
                  transform="rotate(-90 96 96)"
                />
              </svg>
              <motion.span
                className="absolute text-5xl font-light text-purple-800"
                animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
                transition={{
                  repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                  duration: 4,
                  repeatType: "reverse",
                }}
              >
                {formatTime(timeLeft)}
              </motion.span>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-16 h-16 p-0 flex items-center justify-center border-2 border-purple-400"
                onClick={toggleTimer}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-purple-700" />
                ) : (
                  <Play className="h-8 w-8 text-purple-700 ml-1" />
                )}
              </Button>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              {[5, 10, 15, 20].map((minutes) => (
                <Button
                  key={minutes}
                  variant="ghost"
                  className="text-purple-700 hover:text-purple-900 hover:bg-purple-100"
                  onClick={() => setTimer(minutes * 60)}
                  disabled={isPlaying}
                >
                  {minutes}m
                </Button>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link href="/meditation">
                <Button variant="link" className="text-purple-600">
                  Try our full meditation experience →
                </Button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Articles Section */}
      <section ref={articlesRef} className="py-20 px-4">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={articlesInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">Spiritual Insights</h2>
            <p className="text-lg text-purple-700 max-w-2xl mx-auto">
              Explore our collection of articles and wisdom to deepen your practice.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
              >
                <Link href={`/articles/${article.slug}`}>
                  <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 w-full">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <CardTitle className="text-xl mb-2 text-purple-800">{article.title}</CardTitle>
                      <CardDescription className="text-purple-600">{article.excerpt}</CardDescription>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="text-purple-600 hover:text-purple-800 p-0">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link href="/articles">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                View All Articles
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Spiritual Community</h2>
          <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive meditation guides, spiritual insights, and updates on new content.
          </p>

          <form className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg px-6 py-3">Subscribe</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

