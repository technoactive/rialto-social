import type { LunchSpecial } from '@/lib/types/menu';

export const lunchSpecialData: LunchSpecial = {
  id: 'lunch-special',
  title: '🇮🇹 Italian Special',
  price: '£14.95',
  servedUntil: '5 PM',
  sections: {
    primo: [
      {
        id: 'ls-bruschetta',
        name: 'Bruschetta (V)',
        type: 'primo',
        description: 'Rustic toasted bread with ripe tomatoes, garlic, basil & extra virgin olive oil'
      },
      {
        id: 'ls-antipasto',
        name: 'Antipasto',
        type: 'primo',
        description: 'Cured meats, aged cheeses & marinated vegetables — simple, hearty, countryside flavour'
      },
      {
        id: 'ls-insalata-mare',
        name: 'Insalata di Mare (F)',
        type: 'primo',
        description: 'Calamari, prawns & mussels marinated in lemon & olive oil, served with home-made crostini'
      }
    ],
    secondi: [
      {
        id: 'ls-italian-stew',
        name: 'Italian Stew',
        type: 'secondi',
        description: 'Slow-cooked meat with garlic, rosemary & white wine, enriched with cream over herbed rice'
      },
      {
        id: 'ls-pasta-day',
        name: 'Pasta of the Day',
        type: 'secondi',
        description: 'Seasonal, freshly made — just like Nonna would. Ask what\'s cooking'
      },
      {
        id: 'ls-pesce-giorno',
        name: 'Pesce di Giorno (F)',
        type: 'secondi',
        description: 'Daily catch with herbs, white wine & cream sauce, roasted potatoes & seasonal greens'
      }
    ]
  }
};
