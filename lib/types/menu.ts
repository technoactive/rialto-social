// Menu types - structured for easy CMS migration
export type MenuCategory = 
  | 'antipasti'
  | 'salads'
  | 'pasta'
  | 'pizza'
  | 'secondi'
  | 'grilled'
  | 'burgers'
  | 'sides'
  | 'desserts'
  | 'coffee'
  | 'cocktails'
  | 'lunch-special';

export type DietaryTag = 'V' | 'VE' | 'GF' | 'F'; // Vegetarian, Vegan, Gluten-Free, Fish

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number | string; // number for single price, string for "£X / £Y" format
  category: MenuCategory;
  dietary?: DietaryTag[];
  featured?: boolean;
  available?: boolean;
  image?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
  displayOrder: number;
}

export interface LunchSpecialItem {
  id: string;
  name: string;
  description: string;
  type: 'primo' | 'secondi';
}

export interface LunchSpecial {
  id: string;
  title: string;
  price: string;
  servedUntil: string;
  sections: {
    primo: LunchSpecialItem[];
    secondi: LunchSpecialItem[];
  };
}

export interface CocktailMenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'classic' | 'refreshing';
}

export interface DessertMenuItem {
  id: string;
  name: string;
  nameSuffix?: string; // For prices like "£7.50"
  description: string;
  price: number;
  vegan?: boolean;
}

export interface CoffeeMenuItem {
  id: string;
  name: string;
  price: number;
  double?: number; // For double espresso price
  description?: string;
}

export interface TeaMenuItem {
  id: string;
  name: string;
  price: number;
}

export interface WinePrice {
  glass125?: number;
  glass175?: number;
  glass250?: number;
  bottle: number;
}

export interface WineMenuItem {
  id: string;
  number: number;
  name: string;
  region: string;
  country: string;
  year?: string;
  description: string;
  prices: WinePrice;
  recommended?: boolean;
  category: 'white' | 'red' | 'rose' | 'sparkling';
}
