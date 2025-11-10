import Link from "next/link"
import { ArrowLeft, ExternalLink, Star, Droplet, Shield, Zap } from "lucide-react"

const products = [
	{
		name: "LifeStraw Personal Water Filter",
		description: "Removes 99.999999% of bacteria and 99.999% of parasites",
		capacity: "1,000 liters",
		weight: "46g",
		rating: 5,
		price: "$19.95",
		link: "https://www.amazon.com/LifeStraw-Personal-Camping-Emergency-Preparedness/dp/B006QF3TW4",
		image: "https://m.media-amazon.com/images/I/610MT9qiRyL.AC_SX679.jpg",
		features: ["Ultra-lightweight", "No chemicals", "BPA-free", "Long-lasting"],
	},
	{
		name: "Sawyer MINI Water Filtration System",
		description: "Lifetime filtration up to 378,000 liters",
		capacity: "378,000 liters",
		weight: "57g",
		rating: 4,
		price: "$24.95",
		link: "https://www.amazon.com/Sawyer-Products-SP129-Filtration-Squeezable/dp/B00B1OSU4W",
		image: "https://m.media-amazon.com/images/I/71PlK2Jo5uL.AC_SX679.jpg",
		features: ["Versatile use", "Attaches to bottles", "Includes pouch", "Compact"],
	},
	{
		name: "GRAYL GeoPress Water Purifier Bottle",
		description: "Purifies water in 8 seconds with one press",
		capacity: "710ml bottle",
		weight: "450g",
		rating: 5,
		price: "$89.95",
		link: "https://www.amazon.com/GRAYL-GeoPress-Water-Purifier-Bottle/dp/B09255PYRM",
		image: "https://m.media-amazon.com/images/I/51c08yuX5oL.SX522.jpg",
		features: ["Fast purification", "Virus protection", "All-in-one bottle", "Easy to use"],
	},
	{
		name: "Katadyn Vario Water Filter",
		description: "Dual-technology microfilter with adjustable modes for longer life or faster flow",
		capacity: "2,000 liters",
		weight: "425g",
		rating: 4,
		price: "$109.95",
		link: "https://www.amazon.com/Katadyn-Membrane-Endurance-Camping-Backpacking/dp/B01M0MZ7NI",
		image: "https://m.media-amazon.com/images/I/61qq5QCm9bL.SX522.jpg",
		features: ["Fast flow rate", "Adjustable filter", "Carbon core", "Group use"],
	},
	{
		name: "MSR Guardian Purifier",
		description: "Military-grade purification system",
		capacity: "10,000+ liters",
		weight: "490g",
		rating: 5,
		price: "$349.95",
		link: "https://www.amazon.com/MSR-Military-Grade-Backcountry-Emergency-Preparedness/dp/B019ERWU66",
		image: "https://m.media-amazon.com/images/I/91tFj6CBDZL.AC_SX679.jpg",
		features: ["Self-cleaning", "Virus removal", "Extreme durability", "Fast pumping"],
	},
	{
		name: "Platypus QuickDraw Filter",
		description: "Versatile hollow fiber filter system",
		capacity: "1,000 liters",
		weight: "85g",
		rating: 4,
		price: "$39.95",
		link: "https://www.amazon.com/dp/B0DMMFLWM7",
		image: "https://m.media-amazon.com/images/I/81wt4FLdwgL.SX522.jpg",
		features: ["Multiple uses", "Fast flow", "Easy backflushing", "Affordable"],
	},
	{
		name: "SteriPEN Ultralight UV Water Purifier",
		description: "UV light destroys 99.9% of bacteria, viruses, and protozoa",
		capacity: "8,000 liters per charge",
		weight: "76g",
		rating: 5,
		price: "$79.95",
		link: "https://www.amazon.com/SteriPen-Ultralight-UV-Water-Purifier/dp/B07L52FLJV",
		image: "https://m.media-amazon.com/images/I/51z1l7HjyvL.AC_SX679.jpg",
		features: ["USB rechargeable", "60-second treatment", "Digital display", "Virus protection"],
	},
	{
		name: "Aquamira Frontier Max Worldwide Filter",
		description: "Red Line virus filter for worldwide protection with high flow rate",
		capacity: "450 liters",
		weight: "71g",
		rating: 4,
		price: "$34.99",
		link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		image: "https://m.media-amazon.com/images/I/41T5ZjSKq1L.AC_SX679.jpg",
		features: ["Virus filtration", "High flow 500ml/min", "Compact 1oz", "Customizable adapters"],
	},
	{
		name: "HydroBlu Versa Flow Filter",
		description: "Modular system with gravity and inline options",
		capacity: "100,000 liters",
		weight: "95g",
		rating: 5,
		price: "$54.95",
		link: "https://www.amazon.com/VersaFlow-with-Activated-Carbon-Filter/dp/B0B9CHPQJ6",
		image: "https://m.media-amazon.com/images/I/51DNAF+yOZL.SX522.jpg",
		features: ["Multi-use design", "High capacity", "Gravity compatible", "Versatile setup"],
	},
]
const reviewers = [
	{
		name: "Sarah Mitchell",
		slug: "sarah-mitchell",
		specialty: "Ultralight Backpacker",
		bio: "15+ years hiking the PCT and AT. Tested over 50 water filters in extreme conditions.",
		experience: "15 years",
		reviews: 127,
		image: "/female-hiker-outdoor-portrait.jpg",
	},
	{
		name: "Jake Thompson",
		slug: "jake-thompson",
		specialty: "Survival Expert",
		bio: "Former military survival instructor. Specializes in emergency water purification systems.",
		experience: "12 years",
		reviews: 89,
		image: "/male-survival-expert-outdoor-portrait.jpg",
	},
	{
		name: "Emma Rodriguez",
		slug: "emma-rodriguez",
		specialty: "Adventure Photographer",
		bio: "Documenting remote expeditions worldwide. Relies on portable filtration for 6-month trips.",
		experience: "8 years",
		reviews: 64,
		image: "/female-photographer-hiking-portrait.jpg",
	},
	{
		name: "Marcus Chen",
		slug: "marcus-chen",
		specialty: "Trail Runner",
		bio: "Ultra-marathon runner covering 100+ miles weekly. Expert in lightweight hydration solutions.",
		experience: "10 years",
		reviews: 95,
		image: "/male-trail-runner-outdoor-portrait.jpg",
	},
	{
		name: "Olivia Barnes",
		slug: "olivia-barnes",
		specialty: "Family Camping Guide",
		bio: "Leading family outdoor adventures for a decade. Focuses on safe, easy-to-use filters.",
		experience: "11 years",
		reviews: 73,
		image: "/female-camping-guide-outdoor-portrait.jpg",
	},
	{
		name: "David Park",
		slug: "david-park",
		specialty: "Mountaineering Pro",
		bio: "Summited 6 of the 7 peaks. Tests filters at extreme altitudes and temperatures.",
		experience: "14 years",
		reviews: 108,
		image: "/male-mountaineer-outdoor-portrait.jpg",
	},
	{
		name: "Zara Ahmed",
		slug: "zara-ahmed",
		specialty: "Bikepacking Specialist",
		bio: "Cross-country cyclist and gear reviewer. Prioritizes compact, durable filtration systems.",
		experience: "7 years",
		reviews: 56,
		image: "/female-cyclist-outdoor-portrait.jpg",
	},
	{
		name: "Ryan Foster",
		slug: "ryan-foster",
		specialty: "Wilderness Medic",
		bio: "Backcountry EMT with focus on water-borne illness prevention and treatment.",
		experience: "13 years",
		reviews: 82,
		image: "/male-medic-outdoor-portrait.jpg",
	},
	{
		name: "Luna Patel",
		slug: "luna-patel",
		specialty: "Solo Thru-Hiker",
		bio: "Completed CDT, PCT, and AT solo. Advocates for reliable, lightweight water solutions.",
		experience: "9 years",
		reviews: 71,
		image: "/female-solo-hiker-outdoor-portrait.jpg",
	},
]

export default function ProductsPage() {
	return (
		<div className="min-h-screen gradient-bg">
			{/* Header */}
			<div className="container mx-auto px-4 py-8">
				<Link
					href="/"
					className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full hover:glow-hover transition-all"
				>
					<ArrowLeft className="w-4 h-4" />
					Back to Home
				</Link>
			</div>

			{/* Hero Section */}
			<section className="py-20 relative overflow-hidden">
				<div className="container mx-auto px-4 text-center">
					<div className="inline-block glass px-4 py-2 rounded-full mb-6">
						<span className="text-sm font-medium">All Products</span>
					</div>
					<h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">
						Pure Water,{" "}
						<span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Anywhere</span>
					</h1>
					<p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto font-light">
						Discover our curated selection of premium water filtration systems for your adventures
					</p>
				</div>
			</section>

			{/* Products Grid */}
			<section className="py-20 relative">
				<div className="container mx-auto px-4">
					<div className="max-w-7xl mx-auto">
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{products.map((product, index) => (
								<div
									key={product.name}
									className="glass-strong rounded-3xl p-6 hover:glow-hover transition-all duration-300 hover:scale-105 float group"
									style={{ animationDelay: `${index * 0.1}s` }}
								>
									{/* Product Image */}
									<div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl mb-6 overflow-hidden">
										<img
											src={product.image || "/placeholder.svg"}
											alt={product.name}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
									</div>

									{/* Product Info */}
									<div className="space-y-4">
										<div>
											<h3 className="text-2xl font-serif font-semibold mb-2">{product.name}</h3>
											<p className="text-sm text-foreground/70 leading-relaxed">{product.description}</p>
										</div>

										{/* Rating */}
										<div className="flex items-center gap-1">
											{[...Array(5)].map((_, i) => (
												<Star
													key={i}
													className={`w-4 h-4 ${i < product.rating ? "fill-primary text-primary" : "text-foreground/20"}`}
												/>
											))}
										</div>

										{/* Features */}
										<div className="flex flex-wrap gap-2">
											{product.features.map((feature) => (
												<span key={feature} className="glass px-3 py-1 rounded-full text-xs">
													{feature}
												</span>
											))}
										</div>

										{/* Specs */}
										<div className="grid grid-cols-2 gap-4 pt-4 border-t border-foreground/10">
											<div>
												<div className="text-xs text-foreground/60 mb-1">Capacity</div>
												<div className="font-medium text-sm">{product.capacity}</div>
											</div>
											<div>
												<div className="text-xs text-foreground/60 mb-1">Weight</div>
												<div className="font-medium text-sm">{product.weight}</div>
											</div>
										</div>

										{/* Price */}


										{/* Buy on Amazon Button */}
										<a
											href={`/reviewers/${product.slug}`}
											className="glass-strong px-6 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:glow-hover transition-all group-hover:bg-primary/20 w-full bg-gradient-to-r from-primary/10 to-secondary/10"
										>
											<ExternalLink className="w-5 h-5" />
											Buy on Amazon
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Expert Reviewers Section */}
			<section className="py-20 relative">
				<div className="container mx-auto px-4">
					<div className="max-w-7xl mx-auto">
						<h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">Expert Reviewers</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{reviewers.map((reviewer) => (
								<div key={reviewer.name} className="glass-strong rounded-2xl p-8 text-center float">
									<img
										src={reviewer.image || "/placeholder.svg"}
										alt={reviewer.name}
										className="w-32 h-32 rounded-full mx-auto mb-4"
									/>
									<h3 className="text-xl font-semibold mb-3">{reviewer.name}</h3>
									<p className="text-sm text-foreground/70 leading-relaxed mb-4">{reviewer.bio}</p>
									<div className="flex items-center gap-2">
										<span className="text-sm text-foreground/60">Specialty:</span>
										<span className="text-sm font-medium">{reviewer.specialty}</span>
									</div>
									<div className="flex items-center gap-2 mt-2">
										<span className="text-sm text-foreground/60">Experience:</span>
										<span className="text-sm font-medium">{reviewer.experience}</span>
									</div>
									<div className="flex items-center gap-2 mt-2">
										<span className="text-sm text-foreground/60">Reviews:</span>
										<span className="text-sm font-medium">{reviewer.reviews}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Section */}
			<section className="py-20 relative">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">
							Why Trust Our{" "}
							<span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
								Recommendations
							</span>
						</h2>

						<div className="grid md:grid-cols-3 gap-8">
							<div className="glass-strong rounded-2xl p-8 text-center float">
								<div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mx-auto mb-4">
									<Shield className="w-8 h-8 text-primary" />
								</div>
								<h3 className="text-xl font-semibold mb-3">Field Tested</h3>
								<p className="text-foreground/70 text-sm leading-relaxed">
									Every product is personally tested in real hiking conditions
								</p>
							</div>

							<div className="glass-strong rounded-2xl p-8 text-center float" style={{ animationDelay: "0.2s" }}>
								<div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center mx-auto mb-4">
									<Droplet className="w-8 h-8 text-secondary" />
								</div>
								<h3 className="text-xl font-semibold mb-3">Expert Reviews</h3>
								<p className="text-foreground/70 text-sm leading-relaxed">
									Detailed analysis from experienced outdoor enthusiasts
								</p>
							</div>

							<div className="glass-strong rounded-2xl p-8 text-center float" style={{ animationDelay: "0.4s" }}>
								<div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 flex items-center justify-center mx-auto mb-4">
									<Zap className="w-8 h-8 text-accent" />
								</div>
								<h3 className="text-xl font-semibold mb-3">Best Value</h3>
								<p className="text-foreground/70 text-sm leading-relaxed">
									Carefully selected for quality, performance, and price
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Affiliate Disclosure */}
			<section className="py-16 relative">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto glass-strong rounded-2xl p-8 text-center">
						<p className="text-sm text-foreground/60 leading-relaxed">
							<strong>Affiliate Disclosure:</strong> Pure Hiker is a participant in the Amazon Services LLC Associates
							Program. When you purchase through our links, we may earn a small commission at no additional cost to you.
							This helps support our testing and content creation.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}
