import Link from "next/link"
import { ArrowLeft, Star, Droplet, Award, ExternalLink, CheckCircle2 } from "lucide-react"
import { notFound } from "next/navigation"

const reviewers = [
	{
		name: "Alice Johnson",
		slug: "alice-johnson",
		specialty: "Ultralight Backpacker",
		bio: "15+ years hiking the PCT and AT. Tested over 50 water filters in extreme conditions.",
		experience: "15 years",
		reviews: 127,
		image: "/female-hiker-outdoor-portrait.jpg",
		fullBio:
			"Alice has completed the Pacific Crest Trail three times and the Appalachian Trail twice. Her expertise in ultralight backpacking has made her one of the most trusted voices in the hiking community. She's tested water filters in deserts, mountains, and everything in between.",
		expertise: ["Ultralight Gear", "Long-Distance Hiking", "Desert Conditions", "Mountain Streams"],
	},
	{
		name: "Michael Smith",
		slug: "michael-smith",
		specialty: "Survival Expert",
		bio: "Former military survival instructor. Specializes in emergency water purification systems.",
		experience: "12 years",
		reviews: 89,
		image: "/male-survival-expert-outdoor-portrait.jpg",
		fullBio:
			"Michael spent 8 years as a military survival instructor before transitioning to outdoor gear consulting. His focus on reliability and durability in extreme conditions makes his reviews invaluable for serious adventurers.",
		expertise: ["Emergency Preparedness", "Extreme Conditions", "Military-Grade Gear", "Water Safety"],
	},
	{
		name: "Sophia Martinez",
		slug: "sophia-martinez",
		specialty: "Adventure Photographer",
		bio: "Documenting remote expeditions worldwide. Relies on portable filtration for 6-month trips.",
		experience: "8 years",
		reviews: 64,
		image: "/female-photographer-hiking-portrait.jpg",
		fullBio:
			"Sophia's photography expeditions take her to the most remote corners of the planet. She needs water filtration systems that work reliably for months at a time without resupply options.",
		expertise: ["Remote Expeditions", "Long-Term Reliability", "International Travel", "Compact Systems"],
	},
	{
		name: "Ethan Brown",
		slug: "ethan-brown",
		specialty: "Trail Runner",
		bio: "Ultra-marathon runner covering 100+ miles weekly. Expert in lightweight hydration solutions.",
		experience: "10 years",
		reviews: 95,
		image: "/male-trail-runner-outdoor-portrait.jpg",
		fullBio:
			"Ethan runs ultra-marathons in some of the most challenging terrain. His reviews focus on speed, weight, and ease of use while on the move.",
		expertise: ["Ultralight Systems", "Fast Flow Rates", "On-the-Go Filtration", "Endurance Events"],
	},
	{
		name: "Isabella Green",
		slug: "isabella-green",
		specialty: "Family Camping Guide",
		bio: "Leading family outdoor adventures for a decade. Focuses on safe, easy-to-use filters.",
		experience: "11 years",
		reviews: 73,
		image: "/female-camping-guide-outdoor-portrait.jpg",
		fullBio:
			"Isabella specializes in making outdoor adventures accessible and safe for families. Her reviews prioritize ease of use, safety features, and reliability for group settings.",
		expertise: ["Family-Friendly Gear", "Group Camping", "Safety First", "Easy Maintenance"],
	},
	{
		name: "Liam Wilson",
		slug: "liam-wilson",
		specialty: "Mountaineering Pro",
		bio: "Summited 6 of the 7 peaks. Tests filters at extreme altitudes and temperatures.",
		experience: "14 years",
		reviews: 108,
		image: "/male-mountaineer-outdoor-portrait.jpg",
		fullBio:
			"Liam's mountaineering career has taken him to six of the seven summits. He tests gear in freezing temperatures and at extreme altitudes where equipment failure isn't an option.",
		expertise: ["High Altitude", "Freezing Conditions", "Extreme Durability", "Technical Performance"],
	},
	{
		name: "Mia Taylor",
		slug: "mia-taylor",
		specialty: "Bikepacking Specialist",
		bio: "Cross-country cyclist and gear reviewer. Prioritizes compact, durable filtration systems.",
		experience: "7 years",
		reviews: 56,
		image: "/female-cyclist-outdoor-portrait.jpg",
		fullBio:
			"Mia has bikepacked across multiple continents, covering thousands of miles. Her reviews focus on compact, durable systems that can handle daily use and rough handling.",
		expertise: ["Bikepacking", "Compact Design", "Daily Use", "Durability Testing"],
	},
	{
		name: "Noah Johnson",
		slug: "noah-johnson",
		specialty: "Wilderness Medic",
		bio: "Backcountry EMT with focus on water-borne illness prevention and treatment.",
		experience: "13 years",
		reviews: 82,
		image: "/male-medic-outdoor-portrait.jpg",
		fullBio:
			"Noah's medical background gives him unique insight into water safety and filtration effectiveness. His reviews include detailed analysis of pathogen removal and health considerations.",
		expertise: ["Water Safety", "Pathogen Removal", "Medical Perspective", "Health Standards"],
	},
	{
		name: "Ava Patel",
		slug: "ava-patel",
		specialty: "Solo Thru-Hiker",
		bio: "Completed CDT, PCT, and AT solo. Advocates for reliable, lightweight water solutions.",
		experience: "9 years",
		reviews: 71,
		image: "/female-solo-hiker-outdoor-portrait.jpg",
		fullBio:
			"Ava has completed the Triple Crown of hiking solo. Her reviews emphasize reliability, weight, and ease of use for solo adventurers who can't afford equipment failure.",
		expertise: ["Solo Hiking", "Triple Crown", "Self-Reliance", "Lightweight Systems"],
	},
]

const productReviews = {
	"alice-johnson": [
		{
			productName: "LifeStraw Personal Water Filter",
			rating: 5,
			pros: [
				"Incredibly lightweight at 46g",
				"No setup required",
				"Perfect for ultralight setups",
				"Reliable performance",
			],
			cons: ["Can't store filtered water", "Slower flow rate on long hikes"],
			review:
				"After using the LifeStraw on three PCT thru-hikes, I can confidently say it's the best ultralight option. The weight savings are incredible, and it's never failed me even in questionable water sources. The only downside is you can't fill a bottle for later, but for weight-conscious hikers, this is the gold standard.",
			verdict: "Best for Ultralight Backpackers",
			link: "https://www.amazon.com/LifeStraw-Personal-Camping-Emergency-Preparedness/dp/B006QF3TW4",
		},
		{
			productName: "Sawyer MINI Water Filtration System",
			rating: 4,
			pros: ["Versatile attachment options", "Long filter life", "Good value", "Compact size"],
			cons: ["Requires backflushing", "Slower flow than larger models"],
			review:
				"The Sawyer Mini is my backup filter of choice. It's incredibly versatile - you can drink directly, attach it to bottles, or use the included pouch. The lifetime warranty and massive filter capacity make it excellent value. Just be prepared to backflush it regularly to maintain flow rate.",
			verdict: "Best Value Option",
			link: "https://www.amazon.com/Sawyer-Products-SP129-Filtration-Squeezable/dp/B00B1OSU4W",
		},
		{
			productName: "Aquamira Frontier Max Worldwide Filter",
			rating: 4,
			pros: ["High flow rate of 500ml/min", "Virus filtration for global travel", "Compact and lightweight at 71g", "Customizable adapters"],
			cons: ["Shorter filter life at 450 liters", "Some leakage issues reported"],
			review:
				"The Aquamira Frontier Max is a fantastic choice for ultralight backpackers traveling internationally. Its virus filtration is a game-changer for risky water sources, and the high flow rate means quick hydration. However, the filter life is shorter than others, so plan for replacements on long trips. Some users reported leakage, but I haven't experienced this.",
			verdict: "Best for International Ultralight Travel",
			link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		},
	],
	"michael-smith": [
		{
			productName: "MSR Guardian Purifier",
			rating: 5,
			pros: ["Military-grade durability", "Self-cleaning system", "Virus removal", "Extreme reliability"],
			cons: ["Expensive", "Heavier than alternatives"],
			review:
				"In survival situations, equipment failure isn't an option. The MSR Guardian is the most reliable water purification system I've tested. The self-cleaning feature means it works in the muddiest water, and the virus removal gives peace of mind anywhere in the world. Worth every penny for serious expeditions.",
			verdict: "Best for Extreme Conditions",
			link: "https://www.amazon.com/MSR-Military-Grade-Backcountry-Emergency-Preparedness/dp/B019ERWU66",
		},
		{
			productName: "GRAYL GeoPress Purifier",
			rating: 5,
			pros: ["Simple operation", "Virus protection", "No pumping required", "Durable construction"],
			cons: ["Limited capacity per press", "Replacement filters needed"],
			review:
				"The GeoPress is my go-to recommendation for emergency preparedness kits. It's foolproof - even under stress, anyone can operate it. The virus protection is crucial for uncertain water sources, and the speed means you can hydrate quickly in emergency situations.",
			verdict: "Best for Emergency Kits",
			link: "https://www.amazon.com/GRAYL-GeoPress-Water-Purifier-Bottle/dp/B09255PYRM",
		},
		{
			productName: "Aquamira Frontier Max Worldwide Filter",
			rating: 4,
			pros: ["Virus filtration for global use", "High flow rate", "Lightweight at 71g", "Reliable in emergencies"],
			cons: ["Filter life limited to 450 liters", "Some reported leakage issues"],
			review:
				"The Aquamira Frontier Max is a solid addition to any survival kit, especially for international scenarios where viruses are a concern. Its high flow rate and lightweight design make it practical for emergencies. The filter life is shorter than some competitors, so carry a spare for extended missions. Leakage issues are a concern but manageable with proper setup.",
			verdict: "Great for Global Emergency Kits",
			link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		},
	],
	"sophia-martinez": [
		{
			productName: "Sawyer MINI Water Filtration System",
			rating: 5,
			pros: ["Compact size", "Versatile use", "Long-term reliability", "Easy to pack"],
			cons: ["Needs regular maintenance", "Flow rate decreases over time"],
			review:
				"On my 6-month Patagonia expedition, the Sawyer Mini was my constant companion. Its compact size meant I could pack it anywhere, and the versatility to attach to different bottles was crucial when resupplying in remote villages. Regular backflushing kept it flowing well throughout the entire trip.",
			verdict: "Best for Extended Expeditions",
			link: "https://www.amazon.com/Sawyer-Products-SP129-Filtration-Squeezable/dp/B00B1OSU4W",
		},
		{
			productName: "Aquamira Frontier Max Worldwide Filter",
			rating: 5,
			pros: ["Virus filtration for remote areas", "High flow rate", "Compact for travel", "Customizable adapters"],
			cons: ["Shorter filter life", "Requires careful setup to avoid leaks"],
			review:
				"For my international expeditions, the Aquamira Frontier Max is a lifesaver. The virus filtration gives peace of mind in remote regions, and the high flow rate means I can hydrate quickly during shoots. The compact design fits perfectly in my camera bag. Just be mindful of the shorter filter life and ensure proper setup to avoid any leakage.",
			verdict: "Best for Remote Photography Expeditions",
			link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		},
	],
	"ethan-brown": [
		{
			productName: "Katadyn Vario Water Filter",
			rating: 5,
			pros: ["Fast flow rate", "Adjustable modes for efficiency", "Lightweight for group runs", "Reliable performance"],
			cons: ["Heavier than other lightweight options", "Requires maintenance"],
			review:
				"The Katadyn Vario is my top pick for trail running with a group. Its fast flow rate and adjustable modes let me switch between quick hydration and longer filter life, depending on the run. At 425g, it’s heavier than some, but the performance is worth it for longer races.",
			verdict: "Best for Group Trail Running",
			link: "https://www.amazon.com/Katadyn-Membrane-Endurance-Camping-Backpacking/dp/B01M0MZ7NI",
		},
		{
			productName: "Aquamira Frontier Max Worldwide Filter",
			rating: 4,
			pros: ["High flow rate for quick hydration", "Lightweight at 71g", "Virus filtration", "Easy to carry"],
			cons: ["Shorter filter life", "Not ideal for group use"],
			review:
				"The Aquamira Frontier Max is great for solo trail runs where speed is key. Its high flow rate lets me hydrate quickly without breaking stride, and at 71g, it’s barely noticeable in my vest. The shorter filter life means I carry a spare for longer runs, but it’s a solid choice for quick races.",
			verdict: "Great for Solo Trail Running",
			link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		},
	],
	"isabella-green": [
		{
			productName: "GRAYL GeoPress Purifier",
			rating: 5,
			pros: ["Kid-friendly operation", "Fast purification", "All-in-one bottle", "Virus protection"],
			cons: ["Price per person adds up", "Heavier for kids"],
			review:
				"The GeoPress is perfect for family camping. Kids as young as 8 can operate it safely, and the 8-second purification means no waiting around. The virus protection gives me peace of mind when camping with children. We have one for each family member, and it's worth the investment.",
			verdict: "Best for Family Camping",
			link: "https://www.amazon.com/GRAYL-GeoPress-Water-Purifier-Bottle/dp/B09255PYRM",
		},
		{
			productName: "Aquamira Frontier Max Worldwide Filter",
			rating: 4,
			pros: ["Easy for older kids to use", "Virus filtration", "Compact and lightweight", "High flow rate"],
			cons: ["Requires supervision for younger kids", "Shorter filter life"],
			review:
				"The Aquamira Frontier Max is a great option for family camping with older kids who can handle the setup. The virus filtration is reassuring, and the high flow rate keeps everyone hydrated quickly. Younger kids need supervision to avoid leaks, and the filter life means you’ll need spares for longer trips.",
			verdict: "Great for Family Camping with Older Kids",
			link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		},
	],
	"liam-wilson": [
		{
			productName: "MSR Guardian Purifier",
			rating: 5,
			pros: ["Works in freezing temps", "Extreme durability", "Self-cleaning", "Reliable at altitude"],
			cons: ["Heavy", "Expensive", "Overkill for casual use"],
			review:
				"At 20,000 feet on Denali, the MSR Guardian performed flawlessly in -20°F temperatures. Most filters freeze and crack, but this one kept working. The self-cleaning feature is crucial when dealing with glacial silt. It's expensive and heavy, but for high-altitude mountaineering, it's the only filter I trust.",
			verdict: "Best for High-Altitude Mountaineering",
			link: "https://www.amazon.com/MSR-Military-Grade-Backcountry-Emergency-Preparedness/dp/B019ERWU66",
		},
		{
			productName: "Aquamira Frontier Max Worldwide Filter",
			rating: 3,
			pros: ["Lightweight at 71g", "Virus filtration", "High flow rate"],
			cons: ["Not durable in freezing conditions", "Shorter filter life", "Leakage concerns"],
			review:
				"The Aquamira Frontier Max is decent for summer mountaineering with its lightweight design and virus filtration. However, it’s not reliable in freezing temperatures, and I’ve had issues with leakage at high altitudes. For serious mountaineering, I’d stick with more robust options like the MSR Guardian.",
			verdict: "Suitable for Summer Mountaineering Only",
			link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		},
	],
	"mia-taylor": [
		{
			productName: "Sawyer MINI Water Filtration System",
			rating: 5,
			pros: ["Compact for bike bags", "Durable with daily use", "Versatile mounting", "Great value"],
			cons: ["Flow rate decreases", "Regular maintenance required"],
			review:
				"After 5,000 miles of bikepacking across Europe, my Sawyer Mini is still going strong. It fits perfectly in my frame bag, and I can attach it to any water bottle. The key is backflushing it every few days - do that and it'll last forever. Best value for bikepackers.",
			verdict: "Best for Bikepacking",
			link: "https://www.amazon.com/Sawyer-Products-SP129-Filtration-Squeezable/dp/B00B1OSU4W",
		},
		{
			productName: "Aquamira Frontier Max Worldwide Filter",
			rating: 5,
			pros: ["Compact for bikepacking", "High flow rate", "Virus filtration", "Durable with careful use"],
			cons: ["Shorter filter life", "Leakage issues if mishandled"],
			review:
				"The Aquamira Frontier Max is a bikepacker’s dream for international trips. It’s compact enough to fit in any frame bag, and the high flow rate means quick hydration stops. The virus filtration is crucial for remote routes. Just handle it carefully to avoid leaks, and carry a spare filter for long journeys.",
			verdict: "Best for International Bikepacking",
			link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		},
	],
	"noah-johnson": [
		{
			productName: "GRAYL GeoPress Purifier",
			rating: 5,
			pros: ["Virus removal", "Meets EPA standards", "Simple operation", "Reliable purification"],
			cons: ["Requires filter replacement", "Higher cost"],
			review:
				"From a medical perspective, the GeoPress offers the most comprehensive protection. It removes viruses, bacteria, and protozoa, meeting EPA purification standards. In backcountry medical situations, waterborne illness can be life-threatening. The GeoPress provides the peace of mind that water is truly safe.",
			verdict: "Best Medical-Grade Protection",
			link: "https://www.amazon.com/GRAYL-GeoPress-Water-Purifier-Bottle/dp/B09255PYRM",
		},
		{
			productName: "MSR Guardian Purifier",
			rating: 5,
			pros: ["Comprehensive pathogen removal", "Self-cleaning prevents contamination", "Reliable in all conditions"],
			cons: ["Expensive", "Heavy for personal use"],
			review:
				"For group expeditions where I'm responsible for medical care, the MSR Guardian is my choice. The self-cleaning feature prevents cross-contamination, and the virus removal is crucial. It's overkill for solo trips, but for groups in remote areas, it's worth the weight and cost.",
			verdict: "Best for Group Medical Safety",
			link: "https://www.amazon.com/MSR-Military-Grade-Backcountry-Emergency-Preparedness/dp/B019ERWU66",
		},
		{
			productName: "Aquamira Frontier Max Worldwide Filter",
			rating: 4,
			pros: ["Virus filtration", "High flow rate", "Lightweight", "Meets health standards"],
			cons: ["Shorter filter life", "Potential leakage issues"],
			review:
				"The Aquamira Frontier Max is a strong choice for backcountry medical kits due to its virus filtration and high flow rate, ensuring quick access to safe water. It meets health standards for pathogen removal, but the shorter filter life and occasional leakage issues mean you should carry a spare filter and double-check connections.",
			verdict: "Great for Medical Emergency Kits",
			link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		},
	],
	"ava-patel": [
		{
			productName: "Sawyer MINI Water Filtration System",
			rating: 5,
			pros: ["Reliable for months", "Lightweight", "Versatile", "Proven on Triple Crown"],
			cons: ["Needs backflushing", "Flow rate maintenance"],
			review:
				"I've used the Sawyer Mini on all three Triple Crown trails - over 7,000 miles total. It's never failed me. The key is backflushing every week and carrying the cleaning syringe. For solo thru-hikers, the combination of weight, reliability, and versatility is unbeatable. This filter has earned my complete trust.",
			verdict: "Best for Thru-Hiking",
			link: "https://www.amazon.com/Sawyer-Products-SP129-Filtration-Squeezable/dp/B00B1OSU4W",
		},
		{
			productName: "Aquamira Frontier Max Worldwide Filter",
			rating: 4,
			pros: ["Lightweight at 71g", "High flow rate", "Virus filtration", "Reliable for solo hikes"],
			cons: ["Shorter filter life at 450 liters", "Leakage concerns"],
			review:
				"The Aquamira Frontier Max is a great option for solo thru-hiking when you need virus protection, especially internationally. Its lightweight design and high flow rate are perfect for quick stops on the trail. The filter life is shorter, so I carry a spare for long hikes, and I’ve had to be careful with setup to avoid leaks.",
			verdict: "Great for Solo International Thru-Hiking",
			link: "https://www.amazon.com/GEAR-AID-42200-Aquamira-Worldwide/dp/B00SCVHU34",
		},
	],
}

export default function ReviewerPage({ params }: { params: { slug: string } }) {
	const reviewer = reviewers.find((r) => r.slug === params.slug)

	if (!reviewer) {
		notFound()
	}

	const reviews = productReviews[reviewer.slug as keyof typeof productReviews] || []

	return (
		<div className="min-h-screen gradient-bg">
			{/* Back Button */}
			<div className="container mx-auto px-4 py-8">
				<Link
					href="/products"
					className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full hover:glow-hover transition-all"
				>
					<ArrowLeft className="w-4 h-4" />
					Back to Products
				</Link>
			</div>

			{/* Reviewer Profile Header */}
			<section className="py-12 relative">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto">
						<div className="glass-strong rounded-3xl p-8 md:p-12">
							<div className="grid md:grid-cols-3 gap-8 items-start">
								{/* Profile Image */}
								<div className="md:col-span-1">
									<div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl overflow-hidden">
										<img
											src={reviewer.image || "/placeholder.svg"}
											alt={reviewer.name}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>

								{/* Profile Info */}
								<div className="md:col-span-2 space-y-6">
									<div>
										<h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">{reviewer.name}</h1>
										<p className="text-xl text-primary font-medium mb-4">{reviewer.specialty}</p>
										<p className="text-foreground/70 leading-relaxed">{reviewer.fullBio}</p>
									</div>

									{/* Stats */}
									<div className="flex flex-wrap gap-6">
										<div className="glass px-6 py-3 rounded-full">
											<div className="flex items-center gap-2">
												<Award className="w-5 h-5 text-primary" />
												<div>
													<div className="text-sm text-foreground/60">Experience</div>
													<div className="font-semibold">{reviewer.experience}</div>
												</div>
											</div>
										</div>
										<div className="glass px-6 py-3 rounded-full">
											<div className="flex items-center gap-2">
												<Star className="w-5 h-5 text-primary" />
												<div>
													<div className="text-sm text-foreground/60">Reviews</div>
													<div className="font-semibold">{reviewer.reviews}</div>
												</div>
											</div>
										</div>
									</div>

									{/* Expertise Tags */}
									<div>
										<h3 className="text-sm font-semibold text-foreground/60 mb-3">EXPERTISE</h3>
										<div className="flex flex-wrap gap-2">
											{reviewer.expertise.map((skill) => (
												<span key={skill} className="glass px-4 py-2 rounded-full text-sm">
													{skill}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Product Reviews */}
			<section className="py-12 relative">
				<div className="container mx-auto px-4">
					<div className="max-w-5xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">
							Product{" "}
							<span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Reviews</span>
						</h2>

						<div className="space-y-6">
							{reviews.length > 0 && (
								<div className="glass-strong rounded-2xl p-6 md:p-8 float">
									{/* Product Header */}
									<div className="flex items-start justify-between mb-4">
										<div>
											<h3 className="text-2xl font-serif font-semibold mb-2">{reviews[0].productName}</h3>
											<div className="flex items-center gap-1">
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														className={`w-5 h-5 ${i < reviews[0].rating ? "fill-primary text-primary" : "text-foreground/20"}`}
													/>
												))}
												<span className="ml-2 text-sm text-foreground/60">{reviews[0].rating}/5 Rating</span>
											</div>
										</div>
									</div>

									{/* Verdict Badge */}
									<div className="inline-block glass px-4 py-2 rounded-full mb-4">
										<span className="text-sm font-medium text-primary">{reviews[0].verdict}</span>
									</div>

									{/* Review Text */}
									<p className="text-foreground/80 leading-relaxed mb-6">{reviews[0].review}</p>

									{/* Pros and Cons */}
									<div className="grid md:grid-cols-2 gap-6 mb-6">
										<div>
											<h4 className="font-semibold mb-3 flex items-center gap-2">
												<CheckCircle2 className="w-5 h-5 text-green-500" />
												Pros
											</h4>
											<ul className="space-y-2">
												{reviews[0].pros.map((pro, i) => (
													<li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
														<span className="text-green-500 mt-1">•</span>
														{pro}
													</li>
												))}
											</ul>
										</div>
										<div>
											<h4 className="font-semibold mb-3 flex items-center gap-2">
												<Droplet className="w-5 h-5 text-orange-500" />
												Cons
											</h4>
											<ul className="space-y-2">
												{reviews[0].cons.map((con, i) => (
													<li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
														<span className="text-orange-500 mt-1">•</span>
														{con}
													</li>
												))}
											</ul>
										</div>
									</div>

									{/* View Product Link */}
									<a
										href={reviews[0].link}
										target="_blank"
										rel="noopener noreferrer"
										className="glass-strong px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center gap-3 hover:glow-hover transition-all bg-gradient-to-r from-primary/10 to-secondary/10 hover:scale-105"
									>
										<ExternalLink className="w-5 h-5" />
										Buy on Amazon
									</a>
								</div>
							)}
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 relative">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto glass-strong rounded-3xl p-12 text-center">
						<h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Find Your Perfect Filter?</h2>
						<p className="text-foreground/70 mb-8">Explore all our tested and reviewed water filtration systems</p>
						<Link
							href="/products"
							className="glass px-8 py-4 rounded-full font-medium inline-flex items-center gap-2 hover:glow-hover transition-all"
						>
							<Droplet className="w-5 h-5" />
							View All Products
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}