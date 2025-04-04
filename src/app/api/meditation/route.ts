import { NextResponse } from "next/server"

// In a real application, this would be stored in a database
const meditationSessions: {
  id: string
  userId: string
  duration: number
  completedAt: string
  notes?: string
}[] = []

export async function POST(request: Request) {
  try {
    const { userId, duration, notes } = await request.json()

    // Validate request
    if (!userId || !duration) {
      return NextResponse.json({ error: "User ID and duration are required" }, { status: 400 })
    }

    // Create a new meditation session
    const session = {
      id: crypto.randomUUID(),
      userId,
      duration,
      completedAt: new Date().toISOString(),
      notes,
    }

    // Save the session (in a real app, this would go to a database)
    meditationSessions.push(session)

    return NextResponse.json(
      {
        success: true,
        message: "Meditation session recorded successfully",
        session,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Meditation session error:", error)
    return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    // Validate userId
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 })
    }

    // Filter sessions by userId
    const userSessions = meditationSessions.filter((session) => session.userId === userId)

    return NextResponse.json(
      {
        success: true,
        sessions: userSessions,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Fetching meditation sessions error:", error)
    return NextResponse.json({ error: "An error occurred while processing your request" }, { status: 500 })
  }
}

