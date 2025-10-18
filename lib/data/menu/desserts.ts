import type { DessertMenuItem, CoffeeMenuItem, TeaMenuItem } from '@/lib/types/menu';

export const dessertsData: DessertMenuItem[] = [
  {
    id: 'tiramisu',
    name: 'Tiramisù Classico',
    nameSuffix: '£7.50',
    description: 'A delicate dance of espresso-kissed ladyfingers and velvety mascarpone, finished with a whisper of cocoa. Born of passion—soft, sweet, and unforgettable.',
    price: 7.50
  },
  {
    id: 'panna-cotta',
    name: 'Vanilla Panna Cotta',
    nameSuffix: '£6.95',
    description: 'Silken cream infused with vanilla, gently set and crowned with a kiss of berry coulis. Light as a sigh—and just as lovely.',
    price: 6.95
  },
  {
    id: 'fudge-cake',
    name: 'Fudge Cake',
    nameSuffix: '£7.95',
    description: 'A rich embrace of dark chocolate, baked to perfection and cloaked in silky fudge. Served warm with a scoop of creamy vanilla gelato—pure indulgence in every bite.',
    price: 7.95
  },
  {
    id: 'cannoli-trio',
    name: 'Trio di Cannoli',
    nameSuffix: '£7.25',
    description: 'A harmonious trio of crisp, golden pastry shells, each generously filled with velvety ricotta cream. A celebration of texture and tradition.',
    price: 7.25
  },
  {
    id: 'limoncello-cheesecake',
    name: 'Limoncello Cheesecake',
    nameSuffix: '£7.50',
    description: 'A tender kiss of citrus wrapped in creamy bliss. This cheesecake glows with the warmth of limoncello—light, luscious, and made to linger like a sweet memory.',
    price: 7.50
  },
  {
    id: 'carrot-cake',
    name: 'Carrot Cake',
    nameSuffix: '£6.95',
    description: 'A tender slice of comfort, where spiced sweetness meets velvety cream. Moist, fragrant, and lovingly layered with nostalgia.',
    price: 6.95
  },
  {
    id: 'victoria-sponge',
    name: 'Victoria Sponge',
    nameSuffix: '£6.50',
    description: 'Light, luscious, and elegantly layered—an English classic with a whisper of sweetness in every bite.',
    price: 6.50
  },
  {
    id: 'vegan-cake',
    name: 'Cake of the Day (Vegan)',
    nameSuffix: '£6.95',
    description: 'A sweet surprise crafted without compromise—soft, satisfying, and full of quiet charm. Let today\'s slice speak for itself.',
    price: 6.95,
    vegan: true
  }
];

export const coffeeData: CoffeeMenuItem[] = [
  // Caffè Classici
  {
    id: 'espresso',
    name: 'Espresso',
    price: 2.50,
    double: 3.50
  },
  {
    id: 'americano',
    name: 'Americano',
    price: 3.50
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    price: 3.50
  },
  {
    id: 'caffe-latte',
    name: 'Caffè Latte',
    price: 3.50
  },
  {
    id: 'flat-white',
    name: 'Flat White',
    price: 3.50
  },
  {
    id: 'cortado',
    name: 'Cortado',
    price: 3.50
  },
  {
    id: 'mocha',
    name: 'Mocha',
    price: 3.50
  },
  {
    id: 'affogato',
    name: 'Affogato',
    price: 5.50,
    description: 'Vanilla gelato drowned in hot espresso—bittersweet bliss.'
  },
  {
    id: 'caffe-frappe',
    name: 'Caffè Frappe',
    price: 3.50,
    description: 'Iced, whipped, and wonderfully bold.'
  },
  // Caffè Speciali
  {
    id: 'irish-coffee',
    name: 'Irish Coffee',
    price: 3.50
  },
  {
    id: 'sicilian-coffee',
    name: 'Sicilian Coffee',
    price: 7.50,
    description: 'Espresso with a citrus twist and a spirited finish.'
  },
  {
    id: 'french-coffee',
    name: 'French Coffee',
    price: 7.50,
    description: 'Rich, aromatic, and laced with brandy.'
  },
  {
    id: 'cointreau-coffee',
    name: 'Cointreau Coffee',
    price: 7.50,
    description: 'Orange liqueur meets espresso—warm and zesty.'
  },
  {
    id: 'baileys-coffee',
    name: 'Baileys Coffee',
    price: 6.50,
    description: 'Creamy, comforting, and just a little cheeky.'
  }
];

export const teaData: TeaMenuItem[] = [
  {
    id: 'red-berry',
    name: 'Red Berry Tea',
    price: 4.50
  },
  {
    id: 'mint-cedar',
    name: 'Mint & Cedar Tea',
    price: 3.50
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    price: 3.50
  },
  {
    id: 'lemon-ginger',
    name: 'Lemon & Ginger Tea',
    price: 3.50
  },
  {
    id: 'earl-grey',
    name: 'Earl Grey Tea',
    price: 3.50
  },
  {
    id: 'black-tea',
    name: 'Black Tea',
    price: 3.50
  }
];

export const otherBeverages = [
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    price: 3.50,
    description: 'Rich, velvety, and made to soothe.'
  }
];
