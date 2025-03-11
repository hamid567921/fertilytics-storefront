
import { Category, Product } from "@/types";

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Urea",
    slug: "urea",
    description: "High-nitrogen fertilizers for rapid plant growth",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "cat-2",
    name: "Potash",
    slug: "potash",
    description: "Potassium-rich fertilizers for plant health and disease resistance",
    imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "cat-3",
    name: "DAP",
    slug: "dap",
    description: "Diammonium phosphate fertilizers for root development",
    imageUrl: "https://images.unsplash.com/photo-1631209121751-45acd571ae10?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "cat-4",
    name: "Garden Medicines",
    slug: "garden-medicines",
    description: "Plant protection products for pest and disease control",
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1000&auto=format&fit=crop",
  },
];

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Premium Urea 46-0-0",
    category: "urea",
    type: "synthetic",
    price: 29.99,
    discountedPrice: 24.99,
    description: "Our Premium Urea fertilizer contains 46% nitrogen, making it one of the most concentrated nitrogen sources available. Perfect for promoting lush, green growth in lawns, gardens, and crops. This high-quality urea dissolves quickly and provides immediate nitrogen availability to plants.",
    shortDescription: "High-nitrogen fertilizer for rapid green growth",
    imageUrl: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
    quantity: 5,
    unit: "kg",
    inStock: true,
    featured: true,
    bestSeller: true,
    new: false,
    rating: 4.8,
    reviews: 124,
    specifications: {
      "Nitrogen Content": "46%",
      "Phosphorus Content": "0%",
      "Potassium Content": "0%",
      "Form": "Granular",
      "Application Rate": "2-4 kg per 1000 sq.ft."
    },
    benefits: [
      "Promotes rapid leaf and stem growth",
      "Enhances green color in plants",
      "Improves protein content in crops",
      "Fast-acting nitrogen source"
    ],
    usage: [
      "Apply evenly to soil surface and water thoroughly",
      "For lawns, apply during active growth seasons",
      "For vegetables, apply before planting and during growth",
      "For fruit trees, apply in early spring"
    ]
  },
  {
    id: "prod-2",
    name: "Organic Urea",
    category: "urea",
    type: "organic",
    price: 34.99,
    description: "Our Organic Urea is derived from natural sources and contains 40% nitrogen. This slow-release formula provides sustained nutrition to plants without the risk of burning. Perfect for organic gardening and environmentally conscious farming practices.",
    shortDescription: "Natural, slow-release nitrogen source",
    imageUrl: "https://images.unsplash.com/photo-1589928536501-ea2aad22fca7?q=80&w=1000&auto=format&fit=crop",
    quantity: 3,
    unit: "kg",
    inStock: true,
    featured: false,
    bestSeller: false,
    new: true,
    rating: 4.5,
    reviews: 78,
    specifications: {
      "Nitrogen Content": "40%",
      "Phosphorus Content": "0%",
      "Potassium Content": "0%",
      "Form": "Granular",
      "Application Rate": "3-5 kg per 1000 sq.ft."
    },
    benefits: [
      "Environmentally friendly formula",
      "Slow-release for extended feeding",
      "No risk of plant burn when used as directed",
      "Suitable for organic gardening"
    ],
    usage: [
      "Mix into soil before planting",
      "Apply around established plants and water in",
      "For container plants, use 1 tablespoon per gallon of soil",
      "Reapply every 8-10 weeks during growing season"
    ]
  },
  {
    id: "prod-3",
    name: "Muriate of Potash",
    category: "potash",
    type: "synthetic",
    price: 27.99,
    description: "Muriate of Potash (0-0-60) is a high-potassium fertilizer essential for overall plant health and vigor. It enhances disease resistance, improves drought tolerance, and promotes sturdy stem growth. This premium potash fertilizer is ideal for fruit and vegetable crops, flowering plants, and turf grass.",
    shortDescription: "High-potassium fertilizer for plant vigor",
    imageUrl: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1000&auto=format&fit=crop",
    quantity: 5,
    unit: "kg",
    inStock: true,
    featured: true,
    bestSeller: false,
    new: false,
    rating: 4.7,
    reviews: 92,
    specifications: {
      "Nitrogen Content": "0%",
      "Phosphorus Content": "0%",
      "Potassium Content": "60%",
      "Form": "Crystalline",
      "Application Rate": "1-2 kg per 1000 sq.ft."
    },
    benefits: [
      "Strengthens plant cell walls",
      "Improves fruit and vegetable quality",
      "Enhances plant's drought resistance",
      "Increases disease resistance"
    ],
    usage: [
      "Apply to soil surface and incorporate lightly",
      "For fruit trees, apply in early spring and mid-summer",
      "For vegetables, apply before planting and during fruit set",
      "For flowers, apply when buds begin to form"
    ]
  },
  {
    id: "prod-4",
    name: "Organic Potash",
    category: "potash",
    type: "organic",
    price: 32.99,
    description: "Our Organic Potash (0-0-50) is derived from natural mineral deposits and wood ash. This environmentally friendly potassium source promotes flowering, fruiting, and root development in all plants. Ideal for organic gardens and farms seeking to improve crop quality naturally.",
    shortDescription: "Natural potassium for flowering and fruiting",
    imageUrl: "https://images.unsplash.com/photo-1624284220537-d1811d78fc34?q=80&w=1000&auto=format&fit=crop",
    quantity: 4,
    unit: "kg",
    inStock: true,
    featured: false,
    bestSeller: true,
    new: false,
    rating: 4.6,
    reviews: 65,
    specifications: {
      "Nitrogen Content": "0%",
      "Phosphorus Content": "0%",
      "Potassium Content": "50%",
      "Form": "Fine Granular",
      "Application Rate": "2-3 kg per 1000 sq.ft."
    },
    benefits: [
      "Improves flower and fruit production",
      "Enhances natural plant immunity",
      "Increases root development",
      "Certified for organic production"
    ],
    usage: [
      "Mix into soil before planting season",
      "For established plants, apply around drip line",
      "For container gardens, use 1-2 tablespoons per gallon of soil",
      "Water thoroughly after application"
    ]
  },
  {
    id: "prod-5",
    name: "Premium DAP 18-46-0",
    category: "dap",
    type: "synthetic",
    price: 35.99,
    discountedPrice: 29.99,
    description: "Premium DAP (Diammonium Phosphate) is an excellent source of phosphorus and nitrogen, essential for root development and early plant growth. With an 18-46-0 analysis, this high-quality fertilizer stimulates vigorous root systems and supports early season growth in all plants and crops.",
    shortDescription: "Phosphorus-rich fertilizer for strong roots",
    imageUrl: "https://images.unsplash.com/photo-1631209121751-45acd571ae10?q=80&w=1000&auto=format&fit=crop",
    quantity: 5,
    unit: "kg",
    inStock: true,
    featured: true,
    bestSeller: false,
    new: false,
    rating: 4.9,
    reviews: 108,
    specifications: {
      "Nitrogen Content": "18%",
      "Phosphorus Content": "46%",
      "Potassium Content": "0%",
      "Form": "Granular",
      "Application Rate": "2-3 kg per 1000 sq.ft."
    },
    benefits: [
      "Stimulates root development",
      "Enhances early season growth",
      "Improves flowering and seed formation",
      "Boosts overall plant vigor"
    ],
    usage: [
      "Incorporate into soil before planting",
      "For established plants, apply around the root zone",
      "For row crops, apply in bands alongside rows",
      "Water thoroughly after application"
    ]
  },
  {
    id: "prod-6",
    name: "Organic Fungicide Spray",
    category: "garden-medicines",
    type: "organic",
    price: 19.99,
    description: "Our Organic Fungicide Spray offers effective control of powdery mildew, black spot, rust, and other common fungal diseases. This ready-to-use formula is made from botanical oils and natural ingredients that protect plants without harsh chemicals. Safe for use on vegetables, fruits, flowers, and ornamentals.",
    shortDescription: "Natural protection against fungal diseases",
    imageUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1000&auto=format&fit=crop",
    quantity: 1,
    unit: "L",
    inStock: true,
    featured: false,
    bestSeller: false,
    new: true,
    rating: 4.4,
    reviews: 57,
    specifications: {
      "Active Ingredients": "Neem Oil, Thyme Oil",
      "Application Method": "Spray",
      "Coverage": "Up to 100 sq.ft. per liter",
      "Rainproof Time": "2 hours",
      "Safety Period": "Can harvest 24 hours after application"
    },
    benefits: [
      "Controls wide range of fungal diseases",
      "Safe for beneficial insects when dry",
      "No harmful residues on harvested crops",
      "OMRI listed for organic gardening"
    ],
    usage: [
      "Shake well before using",
      "Spray all plant surfaces until thoroughly wet",
      "Apply weekly as preventative or at first sign of disease",
      "Best applied in early morning or evening"
    ]
  },
  {
    id: "prod-7",
    name: "Complete Lawn Feed 12-4-8",
    category: "garden-medicines",
    type: "hybrid",
    price: 39.99,
    description: "Our Complete Lawn Feed combines essential nutrients with weed control properties for a lush, weed-free lawn. This professional-grade formula strengthens grass roots, enhances green color, and prevents common lawn weeds. Perfect for all grass types and seasons.",
    shortDescription: "All-in-one lawn fertilizer and weed control",
    imageUrl: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=1000&auto=format&fit=crop",
    quantity: 10,
    unit: "kg",
    inStock: true,
    featured: true,
    bestSeller: true,
    new: false,
    rating: 4.7,
    reviews: 143,
    specifications: {
      "Nitrogen Content": "12%",
      "Phosphorus Content": "4%",
      "Potassium Content": "8%",
      "Form": "Granular",
      "Application Rate": "3-4 kg per 100 sq.m."
    },
    benefits: [
      "Provides complete nutrition for healthy lawns",
      "Controls dandelions and other broadleaf weeds",
      "Strengthens grass to resist drought and disease",
      "Long-lasting formula feeds for up to 8 weeks"
    ],
    usage: [
      "Apply using a spreader for even coverage",
      "Water lawn thoroughly after application",
      "Apply during active growing season",
      "Keep pets off treated area until watered in"
    ]
  },
  {
    id: "prod-8",
    name: "Insect Control Concentrate",
    category: "garden-medicines",
    type: "synthetic",
    price: 24.99,
    description: "Our Insect Control Concentrate effectively eliminates aphids, whiteflies, mealybugs, spider mites, and other common garden pests. This powerful formula provides up to 4 weeks of protection and can be used on vegetables, fruits, flowers, and shrubs. Mix with water and apply for quick, long-lasting results.",
    shortDescription: "Powerful protection against garden pests",
    imageUrl: "https://images.unsplash.com/photo-1534706442993-ab3ce0d0d357?q=80&w=1000&auto=format&fit=crop",
    quantity: 500,
    unit: "ml",
    inStock: true,
    featured: false,
    bestSeller: false,
    new: false,
    rating: 4.5,
    reviews: 89,
    specifications: {
      "Active Ingredients": "Permethrin 2.5%",
      "Application Method": "Dilute and Spray",
      "Coverage": "Makes up to 50 liters of spray",
      "Rainproof Time": "3 hours",
      "Safety Period": "7 days before harvest"
    },
    benefits: [
      "Controls over 100 different insect species",
      "Fast-acting and long-lasting protection",
      "Works on contact and as a preventative",
      "Economical concentrate formula"
    ],
    usage: [
      "Mix 10ml per liter of water",
      "Spray plant surfaces thoroughly, including undersides of leaves",
      "Apply every 2-4 weeks as needed",
      "Avoid application in hot sun or when bees are active"
    ]
  }
];

export function getProductsByCategory(category: string) {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

export function getBestSellerProducts() {
  return products.filter(product => product.bestSeller);
}

export function getNewProducts() {
  return products.filter(product => product.new);
}

export function getProductById(id: string) {
  return products.find(product => product.id === id);
}

export function getRelatedProducts(product: Product, limit: number = 4) {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
