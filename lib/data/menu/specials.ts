// Rialto Specials Menu
import type { DietaryTag } from "@/lib/types/menu";

export interface SpecialsMenuItem {
  id: string;
  name: string;
  description: string;
  price: number | string;
  dietary?: DietaryTag[];
}

export interface SpecialsSection {
  id: string;
  title: string;
  items: SpecialsMenuItem[];
}

export const specialsData: SpecialsSection[] = [
  {
    id: "specials-starters",
    title: "🌟 Specials - Starters",
    items: [
      {
        id: "parmigiana-melanzane",
        name: "Parmigiana di Melanzane",
        description: "Sliced aubergine baked in a tomato sauce and topped with parmesan cheese",
        price: 7.75,
        dietary: ["V"],
      },
      {
        id: "cozze-rialto",
        name: "Cozze alla Rialto",
        description: "Sautéed mussels in oil, garlic, chilli and a creamy white wine sauce served with a slice of bread",
        price: 8.40,
        dietary: ["F"],
      },
      {
        id: "funghi-ripieni",
        name: "Funghi Ripieni",
        description: "Mushrooms in breadcrumbs filled with garlic & butter",
        price: 6.95,
        dietary: ["V"],
      },
    ],
  },
  {
    id: "specials-mains",
    title: "🌟 Specials - Mains",
    items: [
      {
        id: "beef-sole-mio",
        name: "Beef Sole Mio",
        description: "Strips of beef sautéed with peppers, mushrooms, onion and cream served with rice",
        price: 17.95,
      },
      {
        id: "salmone-griglia",
        name: "Salmone alla Griglia",
        description: "Scottish salmon fillet in a creamy prawns sauce served with new potatoes and mixed vegetables",
        price: 19.95,
        dietary: ["F"],
      },
      {
        id: "tibia-agnello",
        name: "Tibia d'Agnello",
        description: "Slow cooked lamb shank braised in a red wine and mint gravy served with mash potato and mixed vegetables",
        price: 22.95,
      },
    ],
  },
];


