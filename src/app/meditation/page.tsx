"use client"

import { useState } from "react"
import { MeditationTimer } from "@/components/meditation-timer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { NotebookIcon as Lotus, Moon, Wind, Heart, Activity } from "lucide-react"
import Link from "next/link"
import { toast } from "@/hooks/use-toast"

// This would typically come from a database or API
const guidedMeditations = [
  {
    id: "breathing",
    title: "Mindful Breathing",
    description: "A simple meditation focusing on the breath to anchor you in the present moment.",
    duration: 300, // 5 minutes
    icon: <Wind className="h-5 w-5" />,
  },
  {
    id: "loving-kindness",
    title: "Loving-Kindness",
    description: "Cultivate compassion for yourself and others through this heart-centered practice.",
    duration: 600, // 10 minutes
    icon: <Heart className="h-5 w-5" />,
  },
  {
    id: "body-scan",
    title: "Body Scan",
    description: "A progressive relaxation technique to release tension throughout your body.",
    duration: 900, // 15 minutes
    icon: <Activity className="h-5 w-5" />,
  },
]

export default function MeditationPage() {
  const [activeTab, setActiveTab] = useState("timer")
  const [selectedGuided, setSelectedGuided] = useState<string | null>(null)

  const handleSaveSession = async (duration: number, notes: string) => {
    try {
      // In a real app, you would get the userId from authentication
      const userId = "user123"

      const response = await fetch("/api/meditation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          duration,
          notes,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to save meditation session")
      }

      toast({
        title: "Session saved",
        description: "Your meditation session has been recorded successfully.",
      })
    } catch (error) {
      console.error("Error saving meditation session:", error)
      toast({
        title: "Error",
        description: "Failed to save your meditation session. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-purple-700 hover:text-purple-900">
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">Meditation Practice</h1>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Take time to nurture your inner peace with our meditation tools. Choose between a simple timer or guided
            sessions.
          </p>
        </div>

        <Tabs defaultValue="timer" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="timer" className="text-lg py-3">
              <Lotus className="mr-2 h-5 w-5" />
              Meditation Timer
            </TabsTrigger>
            <TabsTrigger value="guided" className="text-lg py-3">
              <Moon className="mr-2 h-5 w-5" />
              Guided Meditations
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timer" className="mt-0">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-purple-800">Self-Guided Meditation</CardTitle>
                <CardDescription className="text-purple-600">
                  Set your desired duration and focus on your breath or chosen meditation object.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MeditationTimer onSave={handleSaveSession} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guided" className="mt-0">
            <Card className="border-none shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-purple-800">Guided Meditations</CardTitle>
                <CardDescription className="text-purple-600">
                  Choose from our collection of guided practices to support your meditation journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {selectedGuided ? (
                  <div className="space-y-6">
                    <Button variant="ghost" className="text-purple-700" onClick={() => setSelectedGuided(null)}>
                      ← Back to all meditations
                    </Button>

                    <div className="text-center mb-6">
                      <h3 className="text-xl font-medium text-purple-800 mb-2">
                        {guidedMeditations.find((m) => m.id === selectedGuided)?.title}
                      </h3>
                      <p className="text-purple-600">
                        {guidedMeditations.find((m) => m.id === selectedGuided)?.description}
                      </p>
                    </div>

                    <MeditationTimer
                      defaultDuration={guidedMeditations.find((m) => m.id === selectedGuided)?.duration || 300}
                      onSave={handleSaveSession}
                    />
                  </div>
                ) : (
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {guidedMeditations.map((meditation) => (
                      <Card
                        key={meditation.id}
                        className="cursor-pointer hover:shadow-md transition-shadow"
                        onClick={() => setSelectedGuided(meditation.id)}
                      >
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            {meditation.icon}
                            <CardTitle className="text-lg text-purple-800">{meditation.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-purple-600 mb-2">{meditation.description}</CardDescription>
                          <p className="text-sm text-purple-500">
                            Duration: {Math.floor(meditation.duration / 60)} minutes
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-purple-100 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-purple-900 mb-2">Track Your Progress</h2>
          <p className="text-purple-700 mb-4">
            Regular meditation practice leads to greater peace and mindfulness. Sign in to track your sessions.
          </p>
          <Button className="bg-purple-600 hover:bg-purple-700">Sign In to Track Progress</Button>
        </div>
      </div>
    </div>
  )
}

