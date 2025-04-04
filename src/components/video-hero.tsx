"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

interface VideoHeroProps {
  videoSrc: string
  fallbackImageSrc: string
  children: React.ReactNode
}

export function VideoHero({ videoSrc, fallbackImageSrc, children }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoError, setVideoError] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const { theme } = useTheme()

  // Log the video source for debugging
  useEffect(() => {
    console.log("Video source:", videoSrc)
  }, [videoSrc])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      console.log("Video can now play")
      setVideoLoaded(true)
      video.play().catch((e) => {
        console.error("Video autoplay prevented:", e)
        // Try playing on user interaction
        const handleUserInteraction = () => {
          video.play().catch((err) => console.error("Still can't play video:", err))
          document.removeEventListener("click", handleUserInteraction)
        }
        document.addEventListener("click", handleUserInteraction)
      })
    }

    const handleError = (e: Event) => {
      console.error("Video failed to load:", e)
      setVideoError(true)
    }

    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    // Set playback rate
    video.playbackRate = 0.6

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Dark overlay - lighter in light mode, darker in dark mode */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50 z-10"></div>

        {/* Video background */}
        {!videoError && (
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={fallbackImageSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Fallback image (shown if video errors or while video loads) */}
        {(videoError || !videoLoaded) && (
          <Image
            src={fallbackImageSrc || "/placeholder.svg"}
            alt="Serene background"
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Content */}
      <div className="z-10">{children}</div>
    </div>
  )
}

