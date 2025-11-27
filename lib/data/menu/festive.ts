// Rialto Festive Menu
import type { MenuItem } from "@/lib/types/menu";

export interface FestiveSection {
  id: string;
  title: string;
  items: MenuItem[];
}

export const festiveData: FestiveSection[] = [
  {
    id: "festive-starters",
    title: "🎄 Festive Starters",
    items: [
      {
        id: "arancini-natale",
        name: "Arancini Di Natale",
        description: "Golden, crispy arancini filled with creamy mozzarella, tender spinach, and savoury ham",
        price: "Ask staff",
      },
      {
        id: "caprese-salad-festive",
        name: "Caprese Salad",
        description: "Sliced vine tomatoes, creamy mozzarella, & fresh basil",
        price: "Ask staff",
        dietary: ["V", "GF"],
      },
      {
        id: "melanzana-parmigiana-festive",
        name: "Melanzana Parmigiana",
        description: "Baked aubergine, layered with rich tomato sauce, mozzarella, and Parmesan",
        price: "Ask staff",
        dietary: ["V"],
      },
      {
        id: "crostini-caprino",
        name: "Crostini con Caprino e Cipolle",
        description: "Toasted crostini with creamy goat cheese and sweet, slow-cooked onions",
        price: "Ask staff",
        dietary: ["V"],
      },
    ],
  },
  {
    id: "festive-mains",
    title: "🎄 Festive Mains",
    items: [
      {
        id: "tacchino-natale",
        name: "Tacchino Di Natale",
        description: "Traditional roast turkey served with pig in blankets, sage & onion stuffing, roasted potatoes, seasonal vegetables, cranberry sauce & gravy",
        price: "Ask staff",
      },
      {
        id: "brazino-grilla",
        name: "Branzino alla Griglia",
        description: "Grilled seabass served with caper sauce, roasted potatoes & greens",
        price: "Ask staff",
        dietary: ["F", "GF"],
      },
      {
        id: "agnello-brasato",
        name: "Agnello Brasato al Rosmarino",
        description: "Slow braised lamb shoulder with red wine jus served with mash potatoes",
        price: "Ask staff",
        dietary: ["GF"],
      },
      {
        id: "ravioli-ricotta-spinach",
        name: "Ravioli Ricotta e Spinaci, Burro e Salvia",
        description: "Ricotta & spinach ravioli with butter & sage",
        price: "Ask staff",
        dietary: ["V"],
      },
    ],
  },
];

