
export interface Product {
  id: string;
  name: string;
  collection: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
  documentUrl: string;
}

const products: Product[] = [
  {
    id: "premier-chrono-1",
    name: "Premier Chronograph",
    collection: "premier",
    price: 3950,
    image: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=1000&auto=format&fit=crop",
    description: "The Premier Chronograph combines elegant design with sophisticated functionality. Featuring a 42mm stainless steel case, blue sunray dial, and three subdials, it exemplifies precision engineering and timeless style.",
    features: [
      "Swiss automatic movement",
      "Chronograph function",
      "Date display",
      "Sapphire crystal",
      "100m water resistance"
    ],
    specifications: {
      "Case Size": "42mm",
      "Case Material": "Stainless steel",
      "Movement": "Automatic chronograph",
      "Power Reserve": "48 hours",
      "Water Resistance": "100m",
      "Dial": "Blue sunray",
      "Strap": "Stainless steel bracelet"
    },
    documentUrl: "/downloads/premier-chronograph.pdf"
  },
  {
    id: "premier-auto-1",
    name: "Premier Automatic",
    collection: "premier",
    price: 2750,
    image: "https://images.unsplash.com/photo-1548171915-152645368a1a?q=80&w=1000&auto=format&fit=crop",
    description: "The Premier Automatic represents understated luxury. With its 40mm rose gold case, cream dial, and brown leather strap, it's a testament to Aura's commitment to elegant simplicity and precision.",
    features: [
      "Swiss automatic movement",
      "Date display",
      "Sapphire crystal with anti-reflective coating",
      "Exhibition caseback",
      "50m water resistance"
    ],
    specifications: {
      "Case Size": "40mm",
      "Case Material": "Rose gold",
      "Movement": "Automatic",
      "Power Reserve": "38 hours",
      "Water Resistance": "50m",
      "Dial": "Cream",
      "Strap": "Brown leather"
    },
    documentUrl: "/downloads/premier-automatic.pdf"
  },
  {
    id: "sportz-dive-1",
    name: "Sportz Diver",
    collection: "sportz",
    price: 1850,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?q=80&w=1000&auto=format&fit=crop",
    description: "The Sportz Diver is designed for underwater adventure. Built with a robust 44mm titanium case, unidirectional bezel, and luminescent markers, it's a reliable companion for professional divers and enthusiasts alike.",
    features: [
      "Precision automatic movement",
      "Unidirectional rotating bezel",
      "Helium escape valve",
      "SuperLuminova indices and hands",
      "300m water resistance"
    ],
    specifications: {
      "Case Size": "44mm",
      "Case Material": "Titanium",
      "Movement": "Automatic",
      "Power Reserve": "42 hours",
      "Water Resistance": "300m",
      "Dial": "Black",
      "Strap": "Rubber with titanium buckle"
    },
    documentUrl: "/downloads/sportz-diver.pdf"
  },
  {
    id: "sportz-chrono-1",
    name: "Sportz Chronograph",
    collection: "sportz",
    price: 2250,
    image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=1000&auto=format&fit=crop",
    description: "The Sportz Chronograph combines athletic functionality with modern aesthetics. Its 43mm carbon fiber case, tachymeter bezel, and multiple subdials deliver both style and precision for the active enthusiast.",
    features: [
      "High-frequency quartz movement",
      "Tachymeter scale",
      "Chronograph function",
      "Date display",
      "200m water resistance"
    ],
    specifications: {
      "Case Size": "43mm",
      "Case Material": "Carbon fiber",
      "Movement": "Quartz chronograph",
      "Battery Life": "5 years",
      "Water Resistance": "200m",
      "Dial": "Black with red accents",
      "Strap": "Integrated silicone"
    },
    documentUrl: "/downloads/sportz-chronograph.pdf"
  },
  {
    id: "premier-moonphase-1",
    name: "Premier Moonphase",
    collection: "premier",
    price: 4550,
    image: "https://images.unsplash.com/photo-1612177343582-665b93b34403?q=80&w=1000&auto=format&fit=crop",
    description: "The Premier Moonphase is the pinnacle of horological artistry. Featuring a 41mm white gold case, deep blue lacquered dial, and precision moonphase indicator, it's a statement of sophistication and technical excellence.",
    features: [
      "In-house automatic movement",
      "Moonphase complication",
      "Date indicator",
      "Sapphire crystal front and back",
      "50m water resistance"
    ],
    specifications: {
      "Case Size": "41mm",
      "Case Material": "White gold",
      "Movement": "In-house automatic",
      "Power Reserve": "68 hours",
      "Water Resistance": "50m",
      "Dial": "Blue lacquer",
      "Strap": "Alligator leather"
    },
    documentUrl: "/downloads/premier-moonphase.pdf"
  },
  {
    id: "sportz-field-1",
    name: "Sportz Field Watch",
    collection: "sportz",
    price: 1050,
    image: "https://images.unsplash.com/photo-1614522824129-b30c6231927f?q=80&w=1000&auto=format&fit=crop",
    description: "The Sportz Field Watch is engineered for outdoor adventure. With a 42mm stainless steel case, scratch-resistant crystal, and precision movement, it delivers reliability and readability in all conditions.",
    features: [
      "Swiss automatic movement",
      "24-hour markers",
      "Date display",
      "Sapphire crystal",
      "150m water resistance"
    ],
    specifications: {
      "Case Size": "42mm",
      "Case Material": "Stainless steel",
      "Movement": "Automatic",
      "Power Reserve": "38 hours",
      "Water Resistance": "150m",
      "Dial": "Khaki green",
      "Strap": "Canvas with leather backing"
    },
    documentUrl: "/downloads/sportz-field.pdf"
  },
];

export default products;
