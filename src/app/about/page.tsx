import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NotebookIcon as Lotus, Heart, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Spiritual Guide & Founder",
      bio: "With over 15 years of experience in meditation and mindfulness practices, Sarah founded SpiritualPath to help others find inner peace.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Michael Chen",
      role: "Meditation Instructor",
      bio: "Michael specializes in breathwork and mindfulness meditation, helping students develop a consistent and transformative practice.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Elena Rodriguez",
      role: "Content Creator",
      bio: "Elena brings ancient spiritual teachings to life through accessible and engaging content for modern practitioners.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-purple-700 hover:text-purple-900">
            ← Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">About SpiritualPath</h1>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Our mission is to guide you on your journey to spiritual growth, mindfulness, and inner peace.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-purple-900 mb-4">Our Story</h2>
            <p className="text-purple-700 mb-4">
              SpiritualPath began in 2018 with a simple vision: to make spiritual practices accessible to everyone,
              regardless of background or belief system.
            </p>
            <p className="text-purple-700 mb-4">
              Our founder, Sarah Johnson, had experienced firsthand the transformative power of meditation and
              mindfulness during a difficult period in her life. She created SpiritualPath to share these practices with
              others seeking peace, purpose, and connection.
            </p>
            <p className="text-purple-700">
              Today, we've grown into a community of practitioners, teachers, and seekers united by the desire to live
              more mindful, meaningful lives.
            </p>
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <Image src="/placeholder.svg?height=800&width=600" alt="Our story" fill className="object-cover" />
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Lotus className="h-12 w-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Authenticity</h3>
                  <p className="text-purple-600">
                    We honor the ancient roots of spiritual practices while making them relevant for modern life.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Heart className="h-12 w-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Compassion</h3>
                  <p className="text-purple-600">
                    We approach every interaction with kindness, understanding, and deep respect.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Users className="h-12 w-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Inclusivity</h3>
                  <p className="text-purple-600">
                    We welcome people of all backgrounds, beliefs, and experience levels on their spiritual journey.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <BookOpen className="h-12 w-12 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Growth</h3>
                  <p className="text-purple-600">
                    We believe in the continuous evolution of both individuals and our community as a whole.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-purple-900 mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className="relative h-[300px]">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold text-purple-800 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-3">{member.role}</p>
                  <p className="text-purple-700">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="bg-purple-100 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Join Our Spiritual Community</h2>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto mb-6">
            Whether you're just beginning your spiritual journey or are looking to deepen your practice, we welcome you
            to join our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              <Link href="/meditation">Try Meditation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

