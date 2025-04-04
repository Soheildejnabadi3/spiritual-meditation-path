import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/ui/card"

// This would typically come from a database or CMS
const articles = [
  {
    title: "Finding Your Inner Peace",
    excerpt: "Discover techniques to quiet your mind and connect with your inner self.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "finding-inner-peace",
    category: "Mindfulness",
    date: "April 15, 2023",
  },
  {
    title: "The Power of Gratitude",
    excerpt: "Learn how practicing gratitude can transform your spiritual journey.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "power-of-gratitude",
    category: "Practices",
    date: "March 22, 2023",
  },
  {
    title: "Ancient Wisdom for Modern Times",
    excerpt: "How timeless spiritual teachings can guide us through contemporary challenges.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "ancient-wisdom",
    category: "Philosophy",
    date: "February 8, 2023",
  },
  {
    title: "The Art of Mindful Breathing",
    excerpt: "Simple breathing techniques to center yourself and reduce stress.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "mindful-breathing",
    category: "Techniques",
    date: "January 17, 2023",
  },
  {
    title: "Connecting with Nature",
    excerpt: "How spending time in nature can enhance your spiritual practice.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "connecting-with-nature",
    category: "Lifestyle",
    date: "December 5, 2022",
  },
  {
    title: "The Journey of Self-Discovery",
    excerpt: "Exploring the path to understanding your true self and purpose.",
    image: "/placeholder.svg?height=200&width=400",
    slug: "self-discovery",
    category: "Personal Growth",
    date: "November 20, 2022",
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">Spiritual Insights</h1>
          <p className="text-lg text-purple-700 max-w-2xl mx-auto">
            Explore our collection of articles and wisdom to deepen your practice and spiritual understanding.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link key={index} href={`/articles/${article.slug}`}>
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 w-full">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 m-2 rounded">
                    {article.category}
                  </div>
                </div>
                <CardContent className="pt-6">
                  <div className="text-sm text-purple-500 mb-2">{article.date}</div>
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
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  )
}

