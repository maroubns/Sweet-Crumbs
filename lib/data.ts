export type GalleryCategory = "wedding" | "birthday" | "babyshower" | "cupcakes";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  name: string;
  category: GalleryCategory;
}

export const categoryLabels: Record<GalleryCategory, string> = {
  wedding: "Wedding",
  birthday: "Birthday",
  babyshower: "Baby Shower",
  cupcakes: "Cupcakes & Desserts",
};

export const galleryItems: GalleryItem[] = [
  { id: "w1", src: "/images/gallery-wedding-01.svg", alt: "Three-tier blush wedding cake with sugar florals", name: "Blush Bouquet", category: "wedding" },
  { id: "w2", src: "/images/gallery-wedding-02.svg", alt: "Ivory wedding cake with delicate piped lace texture", name: "Ivory Lace", category: "wedding" },
  { id: "w3", src: "/images/gallery-wedding-03.svg", alt: "Sage green wedding cake with gold leaf accents", name: "Sage & Gold", category: "wedding" },
  { id: "w4", src: "/images/gallery-wedding-04.svg", alt: "Naked wedding cake with fresh berries and greenery", name: "Garden Naked Cake", category: "wedding" },
  { id: "w5", src: "/images/gallery-wedding-05.svg", alt: "Four-tier grand wedding cake with cascading sugar flowers", name: "Cascade Grand Tier", category: "wedding" },
  { id: "b1", src: "/images/gallery-birthday-01.svg", alt: "Two-tier birthday cake with pastel buttercream swirls", name: "Pastel Swirl", category: "birthday" },
  { id: "b2", src: "/images/gallery-birthday-02.svg", alt: "Bright birthday cake with playful sprinkles and candles", name: "Confetti Celebration", category: "birthday" },
  { id: "b3", src: "/images/gallery-birthday-03.svg", alt: "Chocolate drip birthday cake with gold numeral topper", name: "Chocolate Drip", category: "birthday" },
  { id: "b4", src: "/images/gallery-birthday-04.svg", alt: "Whimsical birthday cake with hand-painted watercolor design", name: "Watercolor Wonder", category: "birthday" },
  { id: "bs1", src: "/images/gallery-babyshower-01.svg", alt: "Soft pink baby shower cake with delicate bow topper", name: "Little Bow", category: "babyshower" },
  { id: "bs2", src: "/images/gallery-babyshower-02.svg", alt: "Sage green baby shower cake with hand-piped clouds", name: "Sweet Dreams", category: "babyshower" },
  { id: "bs3", src: "/images/gallery-babyshower-03.svg", alt: "Two-tier gender-neutral baby shower cake with floral wreath", name: "Floral Wreath", category: "babyshower" },
  { id: "bs4", src: "/images/gallery-babyshower-04.svg", alt: "Blush baby shower cake with tiny sugar booties", name: "Tiny Toes", category: "babyshower" },
  { id: "c1", src: "/images/gallery-cupcakes-01.svg", alt: "Assorted cupcakes with rosette buttercream in blush and sage", name: "Rosette Assortment", category: "cupcakes" },
  { id: "c2", src: "/images/gallery-cupcakes-02.svg", alt: "Macaron tower dessert display in pastel shades", name: "Macaron Tower", category: "cupcakes" },
  { id: "c3", src: "/images/gallery-cupcakes-03.svg", alt: "Mini tart dessert table selection with fresh fruit", name: "Mini Tart Trio", category: "cupcakes" },
  { id: "c4", src: "/images/gallery-cupcakes-04.svg", alt: "Chocolate ganache cupcakes with gold leaf garnish", name: "Ganache & Gold", category: "cupcakes" },
  { id: "c5", src: "/images/gallery-cupcakes-05.svg", alt: "Lemon meringue mini cakes with torched topping", name: "Lemon Meringue Bites", category: "cupcakes" },
];

export const featuredCreations: GalleryItem[] = [
  { id: "f1", src: "/images/featured-blush-wedding-cake.svg", alt: "Three-tier blush wedding cake with hand-piped sugar florals", name: "Blush Bouquet", category: "wedding" },
  { id: "f2", src: "/images/featured-sage-birthday-cake.svg", alt: "Sage green birthday cake with organic buttercream texture", name: "Sage Celebration", category: "birthday" },
  { id: "f3", src: "/images/featured-gold-anniversary-cake.svg", alt: "Three-tier anniversary cake with gold leaf detailing", name: "Golden Anniversary", category: "wedding" },
  { id: "f4", src: "/images/featured-babyshower-cake.svg", alt: "Soft two-tier baby shower cake with pastel piping", name: "Little Wonder", category: "babyshower" },
];

export const instagramFeed = Array.from({ length: 9 }, (_, i) => ({
  id: `insta-${i + 1}`,
  src: `/images/instagram-${String(i + 1).padStart(2, "0")}.svg`,
  alt: "Behind-the-scenes moment from the Sweet Crumbs studio, shared on Instagram",
}));

export const trustLogos = [
  { name: "Bloom Magazine", src: "/images/logo-bloom-magazine.svg" },
  { name: "The Wedding Post", src: "/images/logo-the-wedding-post.svg" },
  { name: "City Bites", src: "/images/logo-city-bites.svg" },
  { name: "Foodie Weekly", src: "/images/logo-foodie-weekly.svg" },
  { name: "Bridal Circle", src: "/images/logo-bridal-circle.svg" },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Jenna T.",
    role: "Married June 2025",
    quote: "Our wedding cake was the centerpiece of the whole reception — as beautiful to look at as it was to eat. Every guest asked where it came from.",
    rating: 5,
    avatar: "/images/customer-avatar-jenna.svg",
  },
  {
    id: "t2",
    name: "Marcus O.",
    role: "40th Birthday",
    quote: "I described a vague idea over the phone and what arrived was better than anything I could have pictured. Genuinely the best cake I've had.",
    rating: 5,
    avatar: "/images/customer-avatar-marcus.svg",
  },
  {
    id: "t3",
    name: "Priya S.",
    role: "Baby Shower Host",
    quote: "So easy to work with from the first message to delivery day. The flavors were incredible and the design matched our theme perfectly.",
    rating: 5,
    avatar: "/images/customer-avatar-priya.svg",
  },
  {
    id: "t4",
    name: "Lauren K.",
    role: "Corporate Event Planner",
    quote: "We've booked Sweet Crumbs for three company events now. Always on time, always stunning, always the first thing that disappears.",
    rating: 5,
    avatar: "/images/customer-avatar-lauren.svg",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: "How far in advance should I order?",
    answer:
      "For wedding cakes, we recommend booking 3–6 months ahead, especially during peak season (May–October). Birthday cakes, baby shower cakes, and dessert tables generally need 2–3 weeks' notice. Rush orders within a week may be possible depending on our calendar — just ask.",
  },
  {
    question: "Do you deliver, and how much does it cost?",
    answer:
      "Yes. We hand-deliver every cake within a 25-mile radius of our studio to make sure it arrives in perfect condition. Delivery starts at $35 and is calculated by distance and cake size at checkout. Pickup is also available at no charge.",
  },
  {
    question: "Can you accommodate dietary restrictions?",
    answer:
      "Absolutely. We regularly bake gluten-free, dairy-free, egg-free, vegan, and nut-free cakes. Let us know your needs when you inquire so we can recommend flavors and confirm kitchen procedures for cross-contact.",
  },
  {
    question: "What's your deposit and payment policy?",
    answer:
      "A non-refundable 30% deposit secures your date and locks in your design. The remaining balance is due 7 days before your event. We accept all major cards and bank transfer.",
  },
  {
    question: "What flavors do you offer?",
    answer:
      "Our core menu includes vanilla bean, dark chocolate fudge, lemon elderflower, salted caramel, red velvet, and almond raspberry — plus seasonal specials. Every order includes a complimentary tasting consultation for two flavors.",
  },
  {
    question: "Can I bring in inspiration photos?",
    answer:
      "Please do — inspiration photos are the best starting point for a custom design consultation. We'll use them to talk through shape, colors, and technique, then create something original that fits your event and budget.",
  },
];

export interface ServiceItem {
  title: string;
  description: string;
  startingAt: string;
  icon: "cake" | "rings" | "table";
}

export const services: ServiceItem[] = [
  {
    title: "Custom Cake Design",
    description:
      "A one-on-one design consultation to build a cake around your vision — any shape, flavor, or occasion. Includes a tasting session and a hand-drawn design sketch.",
    startingAt: "$185",
    icon: "cake",
  },
  {
    title: "Wedding Packages",
    description:
      "Full-service wedding cake planning from first sketch to setup at your venue, with tiered pricing by guest count and a complimentary cake-cutting set.",
    startingAt: "$650",
    icon: "rings",
  },
  {
    title: "Dessert Tables",
    description:
      "A curated spread of mini cakes, cupcakes, tarts, and macarons styled to match your event's palette — perfect alongside or instead of a traditional cake.",
    startingAt: "$320",
    icon: "table",
  },
];

export interface PricingPlan {
  name: string;
  price: string;
  unit: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Simple Sweet",
    price: "$185",
    unit: "starting price",
    description: "A single or double-tier cake for intimate gatherings, up to 20 guests.",
    features: ["1–2 tiers", "1 flavor + filling", "Basic buttercream finish", "Studio pickup"],
  },
  {
    name: "Signature Celebration",
    price: "$425",
    unit: "starting price",
    description: "Our most-booked package — a fully custom centerpiece cake for milestone events.",
    features: [
      "2–3 tiers",
      "Up to 2 flavors",
      "Custom piping, sugar flowers, or metallics",
      "Local delivery included",
      "Design consultation + tasting",
    ],
    popular: true,
  },
  {
    name: "Grand Occasion",
    price: "$950",
    unit: "starting price",
    description: "A showpiece cake for weddings and large events, built to serve 75+ guests.",
    features: [
      "4+ tiers",
      "Up to 3 flavors",
      "Elaborate sugar work & florals",
      "Delivery + on-site setup",
      "Dedicated event timeline",
    ],
  },
];

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineMilestone[] = [
  { year: "2014", title: "First Kitchen Table Orders", description: "Started baking custom cakes for friends and family out of a home kitchen in between a full-time job." },
  { year: "2016", title: "Sweet Crumbs Is Born", description: "Left the 9-to-5 to open Sweet Crumbs full-time, taking on our first wedding season." },
  { year: "2018", title: "Certified Pastry Arts Diploma", description: "Completed advanced pastry arts certification to refine technique in sugar flowers and laminated doughs." },
  { year: "2020", title: "Studio Kitchen Opens", description: "Moved into our first dedicated studio kitchen, tripling weekly order capacity." },
  { year: "2022", title: "Regional Wedding Cake Award", description: "Named Best Wedding Cake Designer at the regional bridal industry awards." },
  { year: "2024", title: "500+ Celebrations", description: "Crossed 500 weddings, birthdays, and celebrations served across the region." },
];

export const businessHours = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday – Friday", hours: "9:00 AM – 5:00 PM" },
  { day: "Saturday", hours: "10:00 AM – 3:00 PM (pickup & delivery only)" },
  { day: "Sunday", hours: "Closed" },
];

export const socialLinks = [
  { platform: "Instagram", href: "https://instagram.com" },
  { platform: "Pinterest", href: "https://pinterest.com" },
  { platform: "Facebook", href: "https://facebook.com" },
];

export const tierGuide = [
  { maxGuests: 15, tier: "6\" single tier", startingPrice: 95 },
  { maxGuests: 30, tier: "6\" + 8\" two tier", startingPrice: 185 },
  { maxGuests: 50, tier: "8\" + 10\" two tier", startingPrice: 285 },
  { maxGuests: 80, tier: "8\" + 10\" + 12\" three tier", startingPrice: 425 },
  { maxGuests: 120, tier: "10\" + 12\" + 14\" three tier", startingPrice: 650 },
  { maxGuests: 200, tier: "4-tier grand cake", startingPrice: 950 },
];
