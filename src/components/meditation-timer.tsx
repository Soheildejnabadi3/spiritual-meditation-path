"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Pause, Play, RotateCcw, Save } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

interface MeditationTimerProps {
  defaultDuration?: number
  onComplete?: () => void
  onSave?: (duration: number, notes: string) => void
}

export function MeditationTimer({ defaultDuration = 300, onComplete, onSave }: MeditationTimerProps) {
  const [duration, setDuration] = useState(defaultDuration)
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isPlaying, setIsPlaying] = useState(false)
  const [notes, setNotes] = useState("")
  const [showDialog, setShowDialog] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const soundRef = useRef<HTMLAudioElement | null>(null)

  // Initialize sound
  useEffect(() => {
    // Create an audio element for the completion sound
    soundRef.current = new Audio("/meditation-bell.mp3")

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  // Timer logic
  useEffect(() => {
    if (isPlaying) {
      // Start a new interval that runs every second
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          // If we've reached 0, handle completion
          if (prevTime <= 1) {
            clearInterval(interval)
            setIsPlaying(false)

            // Play the completion sound
            if (soundRef.current) {
              soundRef.current.volume = 0.5 // Set volume to 50%
              soundRef.current.play().catch((e) => console.error("Error playing sound:", e))
            }

            // Call completion callback if provided
            if (onComplete) {
              onComplete()
            }

            // Show the completion dialog
            setShowDialog(true)
            return 0
          }
          // Otherwise, decrement by 1 second
          return prevTime - 1
        })
      }, 1000)

      // Store the interval reference for cleanup
      intervalRef.current = interval

      // Clean up the interval when component unmounts or when isPlaying changes
      return () => clearInterval(interval)
    }
  }, [isPlaying, onComplete])

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  // Toggle play/pause
  const toggleTimer = () => {
    console.log("Timer toggled. New state:", !isPlaying)
    setIsPlaying(!isPlaying)
  }

  // Reset timer
  const resetTimer = () => {
    setIsPlaying(false)
    setTimeLeft(duration)
  }

  // Handle duration change
  const handleDurationChange = (value: number[]) => {
    const newDuration = value[0]
    setDuration(newDuration)
    setTimeLeft(newDuration)
    setIsPlaying(false)
  }

  // Handle save
  const handleSave = () => {
    if (onSave) {
      onSave(duration - timeLeft, notes)
    }
    setShowDialog(false)
    toast({
      title: "Meditation session saved",
      description: "Your meditation session has been recorded.",
    })
  }

  // Calculate progress percentage
  const progress = ((duration - timeLeft) / duration) * 100

  // Debug logging
  useEffect(() => {
    console.log("Timer state:", { isPlaying, timeLeft, duration })
  }, [isPlaying, timeLeft, duration])

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <motion.div
          className="relative mb-8 flex items-center justify-center"
          animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
          transition={{
            repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
            duration: 4,
            repeatType: "reverse",
          }}
        >
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
          <span className="absolute text-5xl font-light text-purple-800">{formatTime(timeLeft)}</span>
        </motion.div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            size="lg"
            variant="outline"
            className="rounded-full w-14 h-14 p-0 flex items-center justify-center border-2 border-purple-400"
            onClick={toggleTimer}
          >
            {isPlaying ? (
              <Pause className="h-6 w-6 text-purple-700" />
            ) : (
              <Play className="h-6 w-6 text-purple-700 ml-1" />
            )}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-full w-14 h-14 p-0 flex items-center justify-center border-2 border-purple-400"
            onClick={resetTimer}
          >
            <RotateCcw className="h-6 w-6 text-purple-700" />
          </Button>
        </div>

        <div className="mb-6">
          <p className="text-sm text-purple-700 mb-2">Duration: {formatTime(duration)}</p>
          <Slider
            defaultValue={[duration]}
            max={3600}
            min={60}
            step={60}
            onValueChange={handleDurationChange}
            disabled={isPlaying}
            className="py-4"
          />
        </div>

        <div className="flex justify-center gap-4">
          {[5, 10, 15, 20].map((minutes) => (
            <Button
              key={minutes}
              variant="ghost"
              className="text-purple-700 hover:text-purple-900 hover:bg-purple-100"
              onClick={() => {
                const newDuration = minutes * 60
                setDuration(newDuration)
                setTimeLeft(newDuration)
                setIsPlaying(false)
              }}
              disabled={isPlaying}
            >
              {minutes}m
            </Button>
          ))}
        </div>
      </div>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Meditation Complete</DialogTitle>
            <DialogDescription>
              Congratulations on completing your meditation session. Would you like to save this session?
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-2">Add notes about your meditation experience (optional):</p>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="How did you feel during this meditation? What insights did you gain?"
              className="min-h-[100px]"
            />
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Close
            </Button>
            <Button onClick={handleSave} className="bg-purple-600 hover:bg-purple-700">
              <Save className="mr-2 h-4 w-4" />
              Save Session
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

