import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or CMS
const articles = {
  "finding-inner-peace": {
    title: "Finding Your Inner Peace",
    publishedAt: "April 15, 2023",
    author: "Sarah Johnson",
    coverImage: "/placeholder.svg?height=400&width=800",
    content: `
      <p>In today's fast-paced world, finding inner peace can seem like an elusive goal. The constant notifications, deadlines, and social pressures can leave us feeling disconnected from ourselves and our spiritual core.</p>
      
      <p>Inner peace isn't about escaping from the world or avoiding life's challenges. Rather, it's about developing a centered awareness that allows you to engage with life from a place of clarity and calm.</p>
      
      <h2>The Journey Inward</h2>
      
      <p>The journey to inner peace begins with turning your attention inward. This doesn't mean becoming self-absorbed, but rather developing self-awareness. When you understand your thoughts, emotions, and reactions, you gain the power to respond to life's challenges with intention rather than reactivity.</p>
      
      <p>Meditation is one of the most powerful tools for cultivating inner peace. Even just a few minutes of quiet reflection each day can help you develop a more peaceful relationship with yourself and the world around you.</p>
      
      <h2>Practical Steps for Inner Peace</h2>
      
      <ul>
        <li><strong>Start with the breath</strong>: Your breath is always with you and serves as an anchor to the present moment. When you feel overwhelmed, take a few deep, conscious breaths.</li>
        <li><strong>Practice acceptance</strong>: Much of our suffering comes from resisting what is. Learning to accept reality as it is—even while working to change it—can bring tremendous peace.</li>
        <li><strong>Cultivate gratitude</strong>: Regularly acknowledging the good in your life shifts your focus from what's lacking to what's abundant.</li>
        <li><strong>Simplify</strong>: Physical clutter often reflects and contributes to mental clutter. Simplifying your environment can create space for peace to flourish.</li>
      </ul>
      
      <p>Remember that inner peace is not a destination but a practice. There will be days when peace feels more accessible than others. The key is to approach the journey with patience and self-compassion.</p>
    `,
  },
  "power-of-gratitude": {
    title: "The Power of Gratitude",
    publishedAt: "March 22, 2023",
    author: "Michael Chen",
    coverImage: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Gratitude is more than just saying "thank you"—it's a powerful practice that can transform your spiritual journey and everyday life. When we cultivate gratitude, we shift our focus from what's lacking to the abundance that surrounds us.</p>
      
      <h2>The Science of Gratitude</h2>
      
      <p>Research has shown that practicing gratitude can have profound effects on our wellbeing. Regular gratitude practice has been linked to:</p>
      
      <ul>
        <li>Increased happiness and positive mood</li>
        <li>Reduced symptoms of depression</li>
        <li>Stronger immune systems</li>
        <li>Better sleep quality</li>
        <li>Greater resilience in facing challenges</li>
      </ul>
      
      <p>These benefits aren't just psychological—they're physiological too. Gratitude activates the brain's reward pathways and triggers the release of dopamine and serotonin, neurotransmitters associated with feelings of pleasure and contentment.</p>
      
      <h2>Gratitude as a Spiritual Practice</h2>
      
      <p>Across spiritual traditions, gratitude is recognized as a transformative practice. It helps us recognize the interconnectedness of all things and our place within the greater whole. When we express gratitude, we acknowledge that we are supported by forces greater than ourselves.</p>
      
      <p>Gratitude also helps us cultivate presence. When we're truly grateful, we're fully in the moment, appreciating what is rather than dwelling on the past or worrying about the future.</p>
      
      <h2>Simple Gratitude Practices</h2>
      
      <p>You don't need elaborate rituals to incorporate gratitude into your life. Here are some simple practices:</p>
      
      <ul>
        <li><strong>Keep a gratitude journal</strong>: Each day, write down three things you're grateful for.</li>
        <li><strong>Express appreciation</strong>: Tell someone how much you appreciate them or something they've done.</li>
        <li><strong>Gratitude meditation</strong>: Spend a few minutes focusing on the feeling of gratitude in your body.</li>
        <li><strong>Gratitude walks</strong>: As you walk, notice things around you that you're grateful for.</li>
      </ul>
      
      <p>Remember, gratitude isn't about ignoring life's challenges or pretending everything is perfect. It's about recognizing the good that exists alongside the difficulties, and choosing to give it our attention.</p>
    `,
  },
  "ancient-wisdom": {
    title: "Ancient Wisdom for Modern Times",
    publishedAt: "February 8, 2023",
    author: "Elena Rodriguez",
    coverImage: "/placeholder.svg?height=400&width=800",
    content: `
      <p>In our rapidly changing world, ancient spiritual teachings offer timeless wisdom that can help us navigate contemporary challenges with grace and insight. These teachings, developed over thousands of years across diverse cultures, contain profound truths about human nature and our relationship with the universe.</p>
      
      <h2>The Relevance of Ancient Wisdom</h2>
      
      <p>Despite technological advances and cultural shifts, the fundamental questions of human existence remain the same: Who am I? What is my purpose? How can I live a good life? Ancient wisdom traditions offer perspectives on these questions that have stood the test of time.</p>
      
      <p>Many ancient teachings anticipated insights that modern psychology and neuroscience are only now confirming. For example, mindfulness practices found in Buddhist traditions have been scientifically proven to reduce stress and improve mental health.</p>
      
      <h2>Key Teachings from Ancient Traditions</h2>
      
      <h3>The Middle Way</h3>
      
      <p>The Buddha taught the Middle Way—avoiding extremes of indulgence and asceticism. This balanced approach applies to many aspects of modern life, from consumption habits to work-life balance.</p>
      
      <h3>Non-Attachment</h3>
      
      <p>Eastern traditions emphasize non-attachment to outcomes, possessions, and even ideas. This doesn't mean not caring, but rather holding things lightly and recognizing impermanence. In our materialistic culture, this teaching offers a path to greater freedom and peace.</p>
      
      <h3>Interconnectedness</h3>
      
      <p>Indigenous wisdom traditions around the world recognize the interconnectedness of all life. This perspective is increasingly relevant as we face global environmental challenges that require collective action.</p>
      
      <h2>Integrating Ancient Wisdom into Modern Life</h2>
      
      <p>You don't need to adopt an entire spiritual tradition to benefit from ancient wisdom. Here are ways to integrate these teachings into contemporary life:</p>
      
      <ul>
        <li><strong>Daily contemplative practice</strong>: Whether meditation, prayer, or journaling, regular reflection helps us connect with deeper wisdom.</li>
        <li><strong>Ethical living</strong>: Many traditions offer ethical guidelines that can inform our choices as consumers, citizens, and community members.</li>
        <li><strong>Nature connection</strong>: Spending time in nature helps us reconnect with the rhythms and wisdom of the natural world.</li>
        <li><strong>Study and community</strong>: Reading sacred texts and discussing them with others can provide insights and support for your spiritual journey.</li>
      </ul>
      
      <p>As we face unprecedented global challenges, ancient wisdom reminds us that humans have weathered difficult times before. These teachings offer not just coping mechanisms, but pathways to finding meaning, connection, and even joy amidst uncertainty.</p>
    `,
  },
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug as keyof typeof articles]

  if (!article) {
    return <div>Article not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center text-purple-700 hover:text-purple-900 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="relative h-[400px] w-full mb-8 rounded-2xl overflow-hidden">
          <Image src={article.coverImage || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">{article.title}</h1>

        <div className="flex items-center text-purple-600 mb-8">
          <span>By {article.author}</span>
          <span className="mx-2">•</span>
          <span>{article.publishedAt}</span>
        </div>

        <div
          className="prose prose-lg max-w-none prose-headings:text-purple-900 prose-a:text-purple-700 prose-strong:text-purple-800"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <div className="mt-12 pt-8 border-t border-purple-100">
          <h3 className="text-xl font-bold text-purple-900 mb-4">Share this article</h3>
          <div className="flex gap-4">
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
              Facebook
            </Button>
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
              Twitter
            </Button>
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

