import type { WineMenuItem } from '@/lib/types/menu';

export const winesData: WineMenuItem[] = [
  // WHITE WINES
  {
    id: 'villa-rossi-trebbiano',
    number: 1,
    name: 'Villa Rossi Trebbiano, Rubicone \'24',
    region: 'Emilia-Romagna',
    country: 'Italy',
    year: '2024',
    description: 'Crisp, dry and fruity, with a delicate nutty aroma. Young and fresh.',
    prices: { glass125: 4.90, glass175: 6.35, glass250: 8.40, bottle: 23.00 },
    category: 'white'
  },
  {
    id: 'verdicchio-vignamato',
    number: 2,
    name: 'Verdicchio Castelli di Jesi Classico, Vignamato \'24',
    region: 'Marches',
    country: 'Italy',
    year: '2024',
    description: 'Intense fruit aromas with hints of wild flowers leads to a bright and light palate that combines citrus fruit and apples in a crisp and straight-forward style.',
    prices: { glass125: 5.50, glass175: 7.35, glass250: 9.85, bottle: 27.00 },
    category: 'white'
  },
  {
    id: 'castel-firmian-pinot-grigio',
    number: 3,
    name: 'Castel Firmian Pinot Grigio, Mezzacorona \'24',
    region: 'Trentino-Alto Adige',
    country: 'Italy',
    year: '2024',
    description: 'Very clean, nicely balanced Pinot Grigio, with a gentle floral aroma, good medium weight in the mouth, and a refreshing finish.',
    prices: { glass125: 5.70, glass175: 7.45, glass250: 9.95, bottle: 27.50 },
    category: 'white'
  },
  {
    id: 'featherdrop-sauvignon-blanc',
    number: 4,
    name: 'Featherdrop Sauvignon Blanc \'24',
    region: 'South Island',
    country: 'New Zealand',
    year: '2024',
    description: 'Aromas of gooseberry, passionfruit, grapefruit and red capsicum. Flavours of lemon, lime, grapefruit and gooseberry on the palate, with a refreshing finish.',
    prices: { glass125: 6.40, glass175: 8.25, glass250: 10.95, bottle: 30.65 },
    category: 'white'
  },
  {
    id: 'castel-firmian-chardonnay',
    number: 5,
    name: 'Castel Firmian Chardonnay, Mezzacorona \'24',
    region: 'Trentino-Alto Adige',
    country: 'Italy',
    year: '2024',
    description: 'Elegant, fruity nose with hints of red apples, apricot, white melon and citrus. The palate is dry and crisp.',
    prices: { glass125: 6.55, glass175: 8.45, glass250: 11.15, bottle: 31.00 },
    recommended: true,
    category: 'white'
  },
  {
    id: 'malagouzia-assyrtiko',
    number: 6,
    name: 'Malagouzia/Assyrtiko, Thymiopoulos 2023',
    region: 'Macedonia',
    country: 'Greece',
    year: '2023',
    description: 'The perfect marriage of the rich stone fruit and floral flavours of Malagouzia with the acidity and minerality of Assyrtiko, which adds freshness and complexity.',
    prices: { glass125: 7.45, glass175: 9.65, glass250: 12.85, bottle: 34.50 },
    category: 'white'
  },

  // RED WINES
  {
    id: 'villa-rossi-sangiovese',
    number: 7,
    name: 'Villa Rossi Sangiovese, Rubicone \'23',
    region: 'Emilia-Romagna',
    country: 'Italy',
    year: '2023',
    description: 'A smooth and easy-drinking red wine with a delicate aroma and flavours of red fruits.',
    prices: { glass125: 4.90, glass175: 6.35, glass250: 8.40, bottle: 23.00 },
    category: 'red'
  },
  {
    id: 'terre-del-noce-merlot',
    number: 8,
    name: 'Terre del Noce Merlot delle Dolomiti \'23',
    region: 'Trentino-Alto Adige',
    country: 'Italy',
    year: '2023',
    description: 'Smooth, easy-drinking Merlot with plum and red cherry fruit, and a hint of dark chocolate on the finish.',
    prices: { glass125: 5.20, glass175: 6.70, glass250: 8.95, bottle: 25.00 },
    category: 'red'
  },
  {
    id: 'angelo-montepulciano',
    number: 9,
    name: 'Angelo Montepulciano d\'Abruzzo \'23',
    region: 'Abruzzo',
    country: 'Italy',
    year: '2023',
    description: 'A super-juicy wine, with masses of black cherry fruit, a smooth, round texture, and a light dusting of Montepulciano spice.',
    prices: { glass125: 5.50, glass175: 7.35, glass250: 9.85, bottle: 27.00 },
    category: 'red'
  },
  {
    id: 'visconti-primitivo',
    number: 10,
    name: 'Visconti della Rocca Primitivo \'24',
    region: 'Puglia',
    country: 'Italy',
    year: '2024',
    description: 'Intense Primitivo full of jammy plum fruit and spice. Smooth-textured with a lick of vanilla on the finish.',
    prices: { glass125: 5.70, glass175: 7.45, glass250: 9.95, bottle: 27.50 },
    category: 'red'
  },
  {
    id: 'prunus-dao-tinto',
    number: 11,
    name: 'Prunus Dão Tinto \'21',
    region: 'Dão',
    country: 'Portugal',
    year: '2021',
    description: 'Lightly oaked and balanced, with a silky texture. Notes of mulberries, blackberries and anise. Cherry and raspberry flavours with chocolatey oak flavours.',
    prices: { glass125: 6.10, glass175: 7.95, glass250: 10.65, bottle: 30.00 },
    recommended: true,
    category: 'red'
  },
  {
    id: 'xinomavro-thymiopoulos',
    number: 12,
    name: 'Xinomavro, Thymiopoulos \'22',
    region: 'Macedonia',
    country: 'Greece',
    year: '2022',
    description: 'Dark fruit, tobacco and black olive flavours alongside a bracing acidity and a bold tannic structure.',
    prices: { glass125: 7.45, glass175: 9.65, glass250: 12.85, bottle: 34.50 },
    category: 'red'
  },

  // ROSÉ WINES
  {
    id: 'nina-pinot-grigio-rose',
    number: 13,
    name: 'Nina Pinot Grigio Rosé \'24',
    region: 'Abruzzo',
    country: 'Italy',
    year: '2024',
    description: 'Delicate pale pink, with an elegant nose of acacia flowers - light-bodied, dry and delightfully refreshing.',
    prices: { glass125: 5.00, glass175: 6.45, glass250: 8.50, bottle: 23.50 },
    category: 'rose'
  },
  {
    id: 'theone-moschofilero-rose',
    number: 14,
    name: 'Theone Moschofilero Rosé, Kintonis \'24',
    region: 'Peloponnese',
    country: 'Greece',
    year: '2024',
    description: 'Delightful aromas of Turkish delight, rose petals and lemon zest. Fresh flavours of grapefruit and lemon.',
    prices: { glass125: 5.95, glass175: 7.75, glass250: 10.30, bottle: 28.75 },
    category: 'rose'
  },
  {
    id: 'saint-roch-provence-rose',
    number: 15,
    name: 'Saint-Roch Les Vignes Rosé, Les Maîtres Vignerons \'24',
    region: 'Provence',
    country: 'France',
    year: '2024',
    description: 'A pale hue with notes of peaches and lychees. Fresh, lively and fairly light in body, with a dry finish.',
    prices: { glass125: 6.95, glass175: 9.10, glass250: 12.15, bottle: 33.50 },
    recommended: true,
    category: 'rose'
  },

  // SPARKLING WINES
  {
    id: 'prosecco-serena',
    number: 16,
    name: 'Prosecco Extra Dry, Serena 1881',
    region: 'Veneto',
    country: 'Italy',
    description: 'Delicate floral aromas, white flowers with fruity notes of pear and apple. A hint of honey, acacia, and citrus.',
    prices: { glass125: 6.95, bottle: 30.00 },
    category: 'sparkling'
  },
  {
    id: 'acquesi-rose-brut',
    number: 17,
    name: 'Viticoltori Acquesi Rosé Brut',
    region: 'Piedmont',
    country: 'Italy',
    description: 'A beautiful pale pink colour, with a delicate aroma of spring flowers and orchard fruit, refined bubbles, and a crisp fruity finish.',
    prices: { bottle: 31.50 },
    category: 'sparkling'
  }
];

export const wineCategories = [
  { id: 'white', name: 'White Wine', icon: '🍾' },
  { id: 'red', name: 'Red Wine', icon: '🍷' },
  { id: 'rose', name: 'Rosé Wine', icon: '🌸' },
  { id: 'sparkling', name: 'Sparkling Wine', icon: '✨' }
] as const;

