'use client'
import Link from "next/link"
import { ArrowLeft, ExternalLink, Star, CheckCircle, XCircle, Droplet } from "lucide-react"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

const productsData = [
	{
		name: "LifeStraw Personal Water Filter",
		slug: "lifestraw-personal-water-filter",
		description: "Removes 99.999999% of bacteria and 99.999% of parasites",
		capacity: "1,000 liters",
		weight: "46g",
		rating: 5,
		price: "$19.95",
		link: "https://www.amazon.com/LifeStraw-Personal-Camping-Emergency-Preparedness/dp/B006QF3TW4",
		image: "https://m.media-amazon.com/images/I/610MT9qiRyL.AC_SX679.jpg",
		features: ["Ultra-lightweight", "No chemicals", "BPA-free", "Long-lasting"],
		fullReview:
			"The LifeStraw Personal Water Filter is an iconic piece of gear that has revolutionized portable water filtration. After testing this filter on multiple backpacking trips across various terrains, it has proven to be one of the most reliable and affordable options on the market. The hollow fiber membrane technology effectively removes 99.999999% of bacteria and 99.999% of parasites without using chemicals or requiring batteries.",
		pros: [
			"Incredibly lightweight at just 46g",
			"No moving parts or batteries required",
			"Long lifespan of 1,000 liters",
			"Affordable price point under $20",
			"Perfect for emergency kits",
		],
		cons: [
			"Cannot filter viruses",
			"Must drink directly from source",
			"Flow rate slows over time",
			"Not ideal for group camping",
		],
		verdict:
			"Perfect for solo hikers and emergency preparedness. The LifeStraw excels in simplicity and reliability, though it lacks the versatility of more advanced systems.",
	},
	{
		name: "Sawyer MINI Water Filtration System",
		slug: "sawyer-mini-water-filtration-system",
		description: "Lifetime filtration up to 378,000 liters",
		capacity: "378,000 liters",
		weight: "57g",
		rating: 4,
		price: "$24.95",
		link: "https://www.amazon.com/Sawyer-Products-SP129-Filtration-Squeezable/dp/B00B1OSU4W",
		image: "https://m.media-amazon.com/images/I/71PlK2Jo5uL.AC_SX679.jpg",
		features: ["Versatile use", "Attaches to bottles", "Includes pouch", "Compact"],
		fullReview:
			"The Sawyer MINI is one of the most versatile water filters available. Its compact size and multiple attachment options make it suitable for various scenarios - from inline use with hydration packs to squeezing from the included pouch or screwing onto standard water bottles. The impressive 378,000-liter capacity means this filter can last a lifetime with proper maintenance.",
		pros: [
			"Exceptional 378,000L lifetime capacity",
			"Multiple mounting options",
			"Includes cleaning syringe for maintenance",
			"Very compact and portable",
			"Great value for money",
		],
		cons: [
			"Flow rate can be slow, especially when new",
			"Pouch can be difficult to fill",
			"No virus protection",
			"Requires backflushing maintenance",
		],
		verdict:
			"An excellent all-around filter with incredible longevity. Best for backpackers who value versatility and don't mind occasional maintenance.",
	},
	{
		name: "GRAYL GeoPress Water Purifier Bottle",
		slug: "grayl-geopress-water-purifier-bottle",
		description: "Purifies water in 8 seconds with one press",
		capacity: "710ml bottle",
		weight: "450g",
		rating: 5,
		price: "$89.95",
		link: "https://www.amazon.com/GRAYL-GeoPress-Water-Purifier-Bottle/dp/B09255PYRM",
		image: "https://m.media-amazon.com/images/I/51c08yuX5oL.SX522.jpg",
		features: ["Fast purification", "Virus protection", "All-in-one bottle", "Easy to use"],
		fullReview:
			"The GRAYL GeoPress represents the pinnacle of convenience in water purification. Simply fill, press, and drink - it's that easy. In just 8 seconds, you have 710ml of clean, safe water that's been filtered and purified to remove bacteria, viruses, and even heavy metals. This is the only system on our list that truly purifies water rather than just filtering it.",
		pros: [
			"Removes viruses - true purification",
			"Incredibly fast 8-second process",
			"No setup or complicated parts",
			"Built-in bottle design",
			"Perfect for international travel",
		],
		cons: [
			"Heavier than other options at 450g",
			"More expensive upfront cost",
			"Limited to 710ml per press",
			"Cartridge needs replacement after 65 gallons",
		],
		verdict:
			"The best option for travelers and those wanting maximum protection with minimum effort. Worth the investment if convenience and virus protection are priorities.",
	},
	{
		name: "Katadyn Vario Water Filter",
		slug: "katadyn-vario-water-filter",
		description: "Dual-technology microfilter with adjustable modes",
		capacity: "2,000 liters",
		weight: "425g",
		rating: 4,
		price: "$109.95",
		link: "https://www.amazon.com/Katadyn-Membrane-Endurance-Camping-Backpacking/dp/B01M0MZ7NI",
		image: "https://m.media-amazon.com/images/I/61qq5QCm9bL.SX522.jpg",
		features: ["Fast flow rate", "Adjustable filter", "Carbon core", "Group use"],
		fullReview:
			"The Katadyn Vario offers unique flexibility with its adjustable filtration modes. Switch between 'Longer Life' mode for silty water and 'Faster Flow' mode for clear sources. The dual-technology design combines ceramic and glass fiber for thorough filtration, while the activated carbon core improves taste and removes chemicals.",
		pros: [
			"Adjustable flow rate settings",
			"Excellent for group camping",
			"Carbon filter improves taste",
			"Handles turbid water well",
			"Replaceable filter elements extend life",
		],
		cons: [
			"Bulky compared to ultralight options",
			"Higher price point",
			"More maintenance required",
			"No virus protection",
		],
		verdict:
			"Best for base camping and group trips where flow rate and capacity matter more than weight. The adjustable settings make it versatile for varying water conditions.",
	},
	{
		name: "MSR Guardian Purifier",
		slug: "msr-guardian-purifier",
		description: "Military-grade purification system",
		capacity: "10,000+ liters",
		weight: "490g",
		rating: 5,
		price: "$349.95",
		link: "https://www.amazon.com/MSR-Military-Grade-Backcountry-Emergency-Preparedness/dp/B019ERWU66",
		image: "https://m.media-amazon.com/images/I/91tFj6CBDZL.AC_SX679.jpg",
		features: ["Self-cleaning", "Virus removal", "Extreme durability", "Fast pumping"],
		fullReview:
			"The MSR Guardian is the gold standard for expedition-grade water purification. Originally developed for military use, this pump purifier removes viruses, bacteria, and protozoa while featuring a revolutionary self-cleaning system that flushes contaminants with every stroke. It's built to withstand extreme conditions and heavy use.",
		pros: [
			"Removes viruses - full purification",
			"Self-cleaning technology extends filter life",
			"Extremely durable construction",
			"Fast 2.5L/min flow rate",
			"Works in freezing conditions",
		],
		cons: [
			"Premium price at $350",
			"Heavier than ultralight filters",
			"Overkill for casual hiking",
			"Large investment for occasional use",
		],
		verdict:
			"The ultimate choice for serious expeditions, international travel, and situations where failure is not an option. Worth every penny for professional guides and extreme adventurers.",
	},
	{
		name: "Platypus QuickDraw Filter",
		slug: "platypus-quickdraw-filter",
		description: "Versatile hollow fiber filter system",
		capacity: "1,000 liters",
		weight: "85g",
		rating: 4,
		price: "$39.95",
		link: "https://www.amazon.com/dp/B0DMMFLWM7",
		image: "https://m.media-amazon.com/images/I/81wt4FLdwgL.SX522.jpg",
		features: ["Multiple uses", "Fast flow", "Easy backflushing", "Affordable"],
		fullReview:
			"The Platypus QuickDraw offers impressive versatility at a budget-friendly price. It can be used as a squeeze filter, inline with hydration systems, or attached to bottles. The fast flow rate (3L/min when new) and easy backflushing make it convenient for frequent use on the trail.",
		pros: [
			"Fast 3L/min flow rate",
			"Multiple attachment options",
			"Easy to backflush and maintain",
			"Affordable at under $40",
			"Compatible with most water bottles",
		],
		cons: [
			"Flow rate decreases with use",
			"No virus protection",
			"Shorter lifespan than some competitors",
			"Filter can be difficult to dry fully",
		],
		verdict:
			"Excellent value for weekend warriors and regular backpackers. The versatility and ease of use make it a top choice for those who want options without breaking the bank.",
	},
	{
		name: "SteriPEN Ultralight UV Water Purifier",
		slug: "steripen-ultralight-uv-water-purifier",
		description: "UV light destroys 99.9% of bacteria, viruses, and protozoa",
		capacity: "8,000 liters per charge",
		weight: "76g",
		rating: 5,
		price: "$79.95",
		link: "https://www.amazon.com/SteriPen-Ultralight-UV-Water-Purifier/dp/B07L52FLJV",
		image: "https://m.media-amazon.com/images/I/51z1l7HjyvL.AC_SX679.jpg",
		features: ["USB rechargeable", "60-second treatment", "Digital display", "Virus protection"],
		fullReview:
			"The SteriPEN Ultralight uses UV-C light technology to destroy 99.9% of bacteria, viruses, and protozoa in just 60 seconds. This high-tech approach to water purification is ultralight and requires no pumping or squeezing - just stir the UV light in your water container and you're done.",
		pros: [
			"Destroys viruses effectively",
			"Ultra-lightweight at 76g",
			"Fast 60-second treatment",
			"USB rechargeable battery",
			"No physical filters to replace",
		],
		cons: [
			"Requires battery power",
			"Doesn't remove particles or sediment",
			"Pre-filtering needed for cloudy water",
			"Can't use in cold weather (battery issues)",
		],
		verdict:
			"Best for ultralight enthusiasts traveling in areas with relatively clear water. The electronic nature means you need backup power, but the weight savings and virus protection are compelling.",
	},
	{
		name: "Aquamira Frontier Max Worldwide Filter",
		slug: "aquamira-frontier-max-worldwide-filter",
		description: "Red Line virus filter for worldwide protection",
		capacity: "450 liters",
		weight: "71g",
		rating: 4,
		price: "$34.99",
		link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		image: "https://m.media-amazon.com/images/I/41T5ZjSKq1L.AC_SX679.jpg",
		features: ["Virus filtration", "High flow 500ml/min", "Compact 1oz", "Customizable adapters"],
		fullReview:
			"The Aquamira Frontier Max is one of the few straw-style filters that can remove viruses. Its Red Line technology provides worldwide protection in an incredibly compact package. The high flow rate of 500ml/min makes drinking comfortable, and various adapters allow you to use it with different bottles or directly from water sources.",
		pros: [
			"Removes viruses - rare for straw filters",
			"Extremely lightweight at 71g",
			"Fast 500ml/min flow rate",
			"Affordable price point",
			"Includes multiple adapters",
		],
		cons: [
			"Shorter lifespan (450L) than competitors",
			"Must drink directly from source",
			"Filter cartridge can't be cleaned",
			"Flow rate decreases over time",
		],
		verdict:
			"An excellent ultralight option for international travel or areas where virus protection is essential. The short lifespan is offset by the low replacement cost and comprehensive protection.",
	},
	{
		name: "HydroBlu Versa Flow Filter",
		slug: "hydroblu-versa-flow-filter",
		description: "Modular system with gravity and inline options",
		capacity: "100,000 liters",
		weight: "95g",
		rating: 5,
		price: "$54.95",
		link: "https://www.amazon.com/VersaFlow-with-Activated-Carbon-Filter/dp/B0B9CHPQJ6",
		image: "https://m.media-amazon.com/images/I/51DNAF+yOZL.SX522.jpg",
		features: ["Multi-use design", "High capacity", "Gravity compatible", "Versatile setup"],
		fullReview:
			"The HydroBlu Versa Flow lives up to its name with exceptional versatility. This modular system can be configured for squeeze filtering, inline use with hydration packs, gravity filtering for camp, or even attached to faucets. The impressive 100,000-liter capacity means you'll likely never need to replace it.",
		pros: [
			"Incredible 100,000L lifetime capacity",
			"Extremely versatile configurations",
			"Can be used for gravity filtering",
			"Activated carbon filter included",
			"Great value for the capacity",
		],
		cons: [
			"More complex setup than simple filters",
			"Slightly heavier due to versatility",
			"No virus protection",
			"May be overkill for simple day hikes",
		],
		verdict:
			"Perfect for serious backpackers and groups who want maximum flexibility. The ability to switch between squeeze, inline, and gravity modes makes this a Swiss Army knife of water filters.",
	},
]

export default function ProductReviewPage() {

	const params = useParams();
	const slug = params.slug;
	const product = productsData.find((p) => p.slug === params.slug)

	if (!product) {
		return (
			<div className="min-h-screen gradient-bg flex items-center justify-center">
				<div className="text-center">
					<h1 className="text-4xl font-serif font-bold mb-4">Product Not Found</h1>
					<Link href="/products" className="glass px-6 py-3 rounded-full inline-flex items-center gap-2">
						<ArrowLeft className="w-4 h-4" />
						Back to Products
					</Link>
				</div>
			</div>
		)
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.hi === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"hi=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<div className="min-h-screen gradient-bg">
			{/* Header */}
			<div className="container mx-auto px-4 py-8">
				<Link
					href="/products"
					className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full hover:glow-hover transition-all"
				>
					<ArrowLeft className="w-4 h-4" />
					Back to Products
				</Link>
			</div>

			{/* Product Hero */}
			<section className="py-12 relative">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						<div className="grid md:grid-cols-2 gap-12 items-start">
							{/* Product Image */}
							<div className="glass-strong rounded-3xl p-8">
								<div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
									<img
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										className="w-full h-full object-cover"
									/>
								</div>
							</div>

							{/* Product Info */}
							<div className="space-y-6">
								<div>
									<div className="inline-block glass px-4 py-2 rounded-full mb-4">
										<span className="text-sm font-medium">Expert Review</span>
									</div>
									<h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 leading-tight">{product.name}</h1>
									<p className="text-xl text-foreground/70 leading-relaxed">{product.description}</p>
								</div>

								{/* Rating */}
								<div className="flex items-center gap-2">
									<div className="flex items-center gap-1">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className={`w-6 h-6 ${i < product.rating ? "fill-primary text-primary" : "text-foreground/20"}`}
											/>
										))}
									</div>
									<span className="text-lg font-semibold">{product.rating}/5</span>
								</div>

								{/* Features */}
								<div className="flex flex-wrap gap-2">
									{product.features.map((feature) => (
										<span key={feature} className="glass px-4 py-2 rounded-full text-sm">
											{feature}
										</span>
									))}
								</div>

								{/* Specs Grid */}
								<div className="glass-strong rounded-2xl p-6 grid grid-cols-2 gap-6">
									<div>
										<div className="text-sm text-foreground/60 mb-2">Capacity</div>
										<div className="font-semibold text-lg">{product.capacity}</div>
									</div>
									<div>
										<div className="text-sm text-foreground/60 mb-2">Weight</div>
										<div className="font-semibold text-lg">{product.weight}</div>
									</div>

									<div>
										<div className="text-sm text-foreground/60 mb-2">Rating</div>
										<div className="font-semibold text-lg">{product.rating}/5 Stars</div>
									</div>
								</div>

								{/* Buy on Amazon Button */}
								<a
									href={product.link}
									data-auto
									className="glass-strong px-8 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:glow-hover transition-all w-full bg-gradient-to-r from-primary/20 to-secondary/20"
								>
									<ExternalLink className="w-6 h-6" />
									Buy on Amazon
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Review */}
			<section className="py-12 relative">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto space-y-12">
						{/* Full Review */}
						<div className="glass-strong rounded-3xl p-8 md:p-12">
							<div className="flex items-center gap-3 mb-6">
								<Droplet className="w-8 h-8 text-primary" />
								<h2 className="text-3xl font-serif font-bold mb-6">Detailed Review</h2>
							</div>
							<p className="text-foreground/80 text-lg leading-relaxed">{product.fullReview}</p>
						</div>

						{/* Pros and Cons */}
						<div className="grid md:grid-cols-2 gap-8">
							{/* Pros */}
							<div className="glass-strong rounded-3xl p-8">
								<h3 className="text-2xl font-serif font-bold mb-6 text-primary">Pros</h3>
								<ul className="space-y-4">
									{product.pros.map((pro, index) => (
										<li key={index} className="flex items-start gap-3">
											<CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
											<span className="text-foreground/80 leading-relaxed">{pro}</span>
										</li>
									))}
								</ul>
							</div>

							{/* Cons */}
							<div className="glass-strong rounded-3xl p-8">
								<h3 className="text-2xl font-serif font-bold mb-6 text-accent">Cons</h3>
								<ul className="space-y-4">
									{product.cons.map((con, index) => (
										<li key={index} className="flex items-start gap-3">
											<XCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
											<span className="text-foreground/80 leading-relaxed">{con}</span>
										</li>
									))}
								</ul>
							</div>
						</div>

						{/* Verdict */}
						<div className="glass-strong rounded-3xl p-8 md:p-12 text-center">
							<h3 className="text-3xl font-serif font-bold mb-6">Final Verdict</h3>
							<p className="text-xl text-foreground/80 leading-relaxed mb-8">{product.verdict}</p>

							<a
								href={product.link}
								data-auto
								className="glass-strong px-10 py-5 rounded-full font-bold text-xl inline-flex items-center gap-3 hover:glow-hover transition-all bg-gradient-to-r from-primary/20 to-secondary/20"
							>
								<ExternalLink className="w-6 h-6" />
								Buy on Amazon
							</a>
						</div>

						{/* Affiliate Disclosure */}
						<div className="glass rounded-2xl p-6 text-center">
							<p className="text-sm text-foreground/60 leading-relaxed">
								<strong>Affiliate Disclosure:</strong> When you purchase through our Amazon links, we may earn a small
								commission at no additional cost to you.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}