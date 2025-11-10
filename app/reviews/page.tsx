import Link from "next/link"
import { ArrowLeft, Quote, Star } from "lucide-react"

const detailedReviews = [
	{
		text: "It feels like drinking from a cloud.",
		fullReview:
			"I've been using the LifeStraw Peak Series for 6 months now on all my trail runs. The water tastes incredibly clean and fresh, no plastic aftertaste at all. It's so light I barely notice it in my pack. The flow rate is excellent even when I'm exhausted and need quick hydration. Absolutely worth every penny.",
		author: "Emily R.",
		role: "Trail Runner",
		rating: 5,
		product: "LifeStraw Peak Series",
		date: "2 months ago",
	},
	{
		text: "Small, light, and saves me every time I hike.",
		fullReview:
			"The Sawyer Mini has been my trusted companion on countless backpacking trips. It's incredibly compact and weighs almost nothing. I've used it in streams, lakes, and even questionable water sources without any issues. The squeeze bag system is intuitive and the filter lasts forever. My only wish is that the flow rate was slightly faster, but that's a minor trade-off for such reliability.",
		author: "Michael S.",
		role: "Backpacker",
		rating: 5,
		product: "Sawyer Mini",
		date: "3 weeks ago",
	},
	{
		text: "Clean water has never looked this good.",
		fullReview:
			"As someone who photographs outdoor adventures, I appreciate gear that's both functional and beautiful. The GRAYL GeoPress is stunning and performs flawlessly. The one-press purification is genius - 8 seconds and you have clean water. I've used it in remote locations across three continents. It removes viruses too, which gives me peace of mind in developing countries.",
		author: "Sophie H.",
		role: "Adventure Photographer",
		rating: 5,
		product: "GRAYL GeoPress",
		date: "1 month ago",
	},
	{
		text: "Game changer for my thru-hiking adventures.",
		fullReview:
			"I completed the Pacific Crest Trail with the Katadyn BeFree and it never let me down. The collapsible flask design is perfect for long-distance hiking. It filters fast, packs down small, and the 1L capacity is ideal. After 2,650 miles, it's still going strong. The only maintenance needed was occasional backflushing. Highly recommend for any serious hiker.",
		author: "David L.",
		role: "Thru-Hiker",
		rating: 5,
		product: "Katadyn BeFree",
		date: "5 months ago",
	},
	{
		text: "Reliable protection for international travel.",
		fullReview:
			"The MSR Guardian is my go-to for international expeditions. Yes, it's heavier than ultralight options, but the pump system and virus protection are unmatched. I've used it in Southeast Asia, South America, and Africa without a single issue. The self-cleaning feature is brilliant. Worth the weight for the peace of mind it provides.",
		author: "Dr. Anna M.",
		role: "Expedition Leader",
		rating: 5,
		product: "MSR Guardian",
		date: "4 months ago",
	},
	{
		text: "Perfect balance of speed and portability.",
		fullReview:
			"The Platypus QuickDraw is my favorite filter for fast-paced hiking. It attaches directly to my water bottle and filters as I drink. The flow rate is impressive and it's incredibly easy to use. I love that I can also use it with a hydration bladder. After 6 months of regular use, it's still performing like new. Great value for money.",
		author: "Chris B.",
		role: "Day Hiker",
		rating: 5,
		product: "Platypus QuickDraw",
		date: "3 months ago",
	},
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 hover:glow-hover transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block glass px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-medium">Customer Reviews</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Voices of the{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trail</span>
            </h1>
            <p className="text-xl text-foreground/70">
              Real experiences from adventurers who trust our recommended water filters
            </p>
          </div>

          <div className="space-y-8">
            {detailedReviews.map((review, index) => (
              <div
                key={index}
                className="glass-strong rounded-3xl p-8 hover:glow-hover transition-all duration-300 float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{review.author}</h3>
                      <span className="text-sm text-foreground/60">• {review.role}</span>
                    </div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-sm text-foreground/60">{review.date}</span>
                    </div>
                    <p className="text-sm text-foreground/70 mb-4">{review.product}</p>
                  </div>
                  <Quote className="w-10 h-10 text-primary/30 flex-shrink-0" />
                </div>

                <p className="text-lg font-medium mb-4 text-primary/90">&ldquo;{review.text}&rdquo;</p>
                <p className="text-foreground/80 leading-relaxed">{review.fullReview}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center glass-strong rounded-3xl p-8">
            <h3 className="text-2xl font-serif font-bold mb-4">Share Your Experience</h3>
            <p className="text-foreground/70 mb-6">
              Have you used any of these water filters? We'd love to hear about your adventures!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full hover:glow-hover transition-all"
            >
              Submit Your Review
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
