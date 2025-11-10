import { Quote } from "lucide-react"

const reviews = [
	{
		text: "It feels like drinking from a cloud.",
		author: "Aisha R.",
		role: "Trail Runner",
	},
	{
		text: "Small, light, and saves me every time I hike.",
		author: "Mateo S.",
		role: "Backpacker",
	},
	{
		text: "Clean water has never looked this good.",
		author: "Olivia P.",
		role: "Adventure Photographer",
	},
]

export function Reviews() {
  return (
    <section id="reviews" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block glass px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold">
            Voices of the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trail</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="glass-strong rounded-3xl p-8 hover:glow-hover transition-all duration-300 float"
              style={{ animationDelay: `${index * 0.25}s` }}
            >
              <Quote className="w-12 h-12 text-primary/40 mb-6" />
              <p className="text-lg font-medium mb-6 leading-relaxed">{review.text}</p>
              <div>
                <p className="font-semibold">{review.author}</p>
                <p className="text-sm text-foreground/60">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
