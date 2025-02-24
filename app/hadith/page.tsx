import type { Metadata } from "next"
import { constructMetadata } from "../metadata.config"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = constructMetadata({
  title: "Hadith Collections",
  description: "Explore authentic collections of Hadith from various scholars",
  path: "/hadith",
})

const hadithCollections = [
  { id: "bukhari", name: "Sahih al-Bukhari", description: "The most authentic collection of Hadith" },
  { id: "muslim", name: "Sahih Muslim", description: "One of the Kutub al-Sittah (six major hadith collections)" },
  { id: "abudawud", name: "Sunan Abu Dawud", description: "A collection focusing on legal traditions" },
  { id: "tirmidhi", name: "Jami` at-Tirmidhi", description: "Known for its categorization of Hadith" },
  { id: "nasai", name: "Sunan an-Nasa'i", description: "Noted for its repetition of Hadith with slight variations" },
  { id: "ibnmajah", name: "Sunan Ibn Majah", description: "Completes the six canonical collections of Hadith" },
  { id: "malik", name: "Muwatta Imam Malik", description: "One of the earliest collections of Islamic law" },
  {
    id: "riyadussalihin",
    name: "Riyad as-Salihin",
    description: "A collection of Hadith on Islamic etiquette and conduct",
  },
]

export default function HadithPage() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Hadith Collections</h1>
        <p className="text-muted-foreground">Explore authentic collections of Hadith from various scholars</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>What are Hadiths?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Hadiths are the collected sayings and actions of Prophet Muhammad (peace be upon him), which serve as a
              vital source of guidance for Muslims alongside the Quran.
            </p>
            <Link href="/hadith/about">
              <Button variant="outline">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hadith of the Day</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 italic">"The best among you are those who have the best manners and character."</p>
            <p className="text-sm text-muted-foreground">- Sahih al-Bukhari 3559</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Hadith Topics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <Link href="/hadith/topic/faith" className="text-primary hover:underline">
                  Faith (Iman)
                </Link>
              </li>
              <li>
                <Link href="/hadith/topic/worship" className="text-primary hover:underline">
                  Worship (Ibadah)
                </Link>
              </li>
              <li>
                <Link href="/hadith/topic/manners" className="text-primary hover:underline">
                  Manners (Adab)
                </Link>
              </li>
              <li>
                <Link href="/hadith/topic/family" className="text-primary hover:underline">
                  Family Life
                </Link>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
      <h2 className="text-2xl font-bold mb-4">Explore Hadith Collections</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {hadithCollections.map((collection) => (
          <Link key={collection.id} href={`/hadith/${collection.id}`}>
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">{collection.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{collection.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

