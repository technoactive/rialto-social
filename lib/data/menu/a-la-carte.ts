import type { MenuSection } from '@/lib/types/menu';

export const aLaCarteData: MenuSection[] = [
  {
    id: 'antipasti',
    title: '🥖 Antipasti & Small Plates',
    displayOrder: 1,
    items: [
      {
        id: 'pane-aglio',
        name: 'Pane all\'aglio',
        description: 'Artisanal bread with garlic oil. Add Mozzarella for £1.75',
        price: 5.25,
        category: 'antipasti',
        dietary: ['V', 'VE']
      },
      {
        id: 'piccolo-impasto',
        name: 'Piccolo Impasto',
        description: 'Basket of dough balls served with garlic butter',
        price: 5.25,
        category: 'antipasti'
      },
      {
        id: 'calamari-fritti',
        name: 'Calamari Fritti',
        description: 'Lightly battered squid with lemon wedges',
        price: 8.45,
        category: 'antipasti',
        dietary: ['F']
      },
      {
        id: 'misto-olive',
        name: 'Misto di Olive',
        description: 'Marinated Italian olives with herbs & spices',
        price: 5.00,
        category: 'antipasti',
        dietary: ['V', 'VE', 'GF']
      },
      {
        id: 'zucchine-fritte',
        name: 'Zucchine Fritte',
        description: 'Crispy zucchini strips with zesty aioli',
        price: 5.95,
        category: 'antipasti',
        dietary: ['V', 'VE']
      },
      {
        id: 'bruschetta',
        name: 'Traditionale Bruschetta',
        description: 'Rustic bread with ripe tomatoes, garlic, basil & olive oil',
        price: 6.95,
        category: 'antipasti',
        dietary: ['V', 'VE']
      },
      {
        id: 'polpo-griglia',
        name: 'Polpo alla Griglia',
        description: 'Grilled octopus with olive oil, herbs & lemon',
        price: 14.95,
        category: 'antipasti',
        dietary: ['F', 'GF']
      },
      {
        id: 'fritto-misto',
        name: 'Fritto Misto',
        description: 'Fried squid, whitebait & prawns with sauces & garlic bread',
        price: '£25 / £45',
        category: 'antipasti',
        dietary: ['F']
      },
      {
        id: 'antipasto-rustico',
        name: 'Antipasto Rustico',
        description: 'Cured meats, olives, artichokes & sun-dried tomatoes with rosemary focaccia',
        price: '£22 / £40',
        category: 'antipasti'
      },
      {
        id: 'zuppa-giorno',
        name: 'Zuppa del Giorno',
        description: 'Soup of the day with toasted artisanal bread',
        price: 6.95,
        category: 'antipasti'
      }
    ]
  },
  {
    id: 'insalate',
    title: '🥗 Insalate',
    displayOrder: 2,
    items: [
      {
        id: 'caprese',
        name: 'Insalata Caprese',
        description: 'Tomatoes, mozzarella & basil with olive oil & balsamic',
        price: '£8.95 / £13.95',
        category: 'salads',
        dietary: ['V', 'GF']
      },
      {
        id: 'cesare',
        name: 'Insalata Cesare',
        description: 'Romaine, Caesar dressing, Parmesan, croutons & anchovies',
        price: '£8.95 / £13.95',
        category: 'salads'
      },
      {
        id: 'frutti-mare-salad',
        name: 'Insalata Frutti di Mare',
        description: 'Mixed seafood salad with prawns, squid, mussels, olive oil, lemon & fresh herbs. Served chilled with crostini',
        price: '£9.95 / £14.95',
        category: 'salads',
        dietary: ['F']
      },
      {
        id: 'fantasia',
        name: 'Insalata Fantasia',
        description: 'Spinach, rocket, grilled chicken, mushrooms, chilli, avocado, sun-blushed tomatoes, pomegranate & dressing',
        price: '£8.95 / £13.95',
        category: 'salads',
        dietary: ['GF']
      }
    ]
  },
  {
    id: 'pasta-risotti',
    title: '🍝 Pasta & Risotto',
    displayOrder: 3,
    items: [
      {
        id: 'spaghetti-bolognese',
        name: 'Spaghetti alla Bolognese',
        description: 'Beef ragù with tomatoes, red wine & herbs',
        price: 15.95,
        category: 'pasta'
      },
      {
        id: 'spaghetti-carbonara',
        name: 'Spaghetti alla Carbonara',
        description: 'Pancetta, egg yolk sauce, pecorino & black pepper',
        price: 14.95,
        category: 'pasta'
      },
      {
        id: 'linguini-pescatore',
        name: 'Linguini/Riso Pescatore',
        description: 'Seafood with garlic, chilli, white wine & tomato sauce',
        price: 18.95,
        category: 'pasta',
        dietary: ['F']
      },
      {
        id: 'scarpariello',
        name: 'Scarpariello Pasta',
        description: 'Cherry tomato sauce with garlic, chilli, basil & Pecorino-Parmesan',
        price: 14.95,
        category: 'pasta',
        dietary: ['V']
      },
      {
        id: 'pasta-pesto',
        name: 'Pasta al Pesto Genovese',
        description: 'Basil pesto with Parmigiano, pine nuts & garlic',
        price: 14.95,
        category: 'pasta',
        dietary: ['V']
      },
      {
        id: 'gnocchi-sorrentina',
        name: 'Gnocchi alla Sorrentina',
        description: 'Baked gnocchi in tomato sauce with mozzarella & basil',
        price: 14.95,
        category: 'pasta',
        dietary: ['V']
      },
      {
        id: 'risotto-funghi',
        name: 'Risotto ai Funghi di Bosco',
        description: 'Creamy risotto with wild mushrooms & white wine',
        price: 14.95,
        category: 'pasta',
        dietary: ['V', 'GF']
      }
    ]
  },
  {
    id: 'pizze',
    title: '🍕 Pizze Artigianali',
    displayOrder: 4,
    items: [
      {
        id: 'margherita',
        name: 'Margherita',
        description: 'Nonna sauce, mozzarella & basil',
        price: 14.95,
        category: 'pizza',
        dietary: ['V']
      },
      {
        id: 'melanzana-capra',
        name: 'Melanzana di Capra',
        description: 'Aubergines, peppers, basil & goat cheese',
        price: 14.95,
        category: 'pizza',
        dietary: ['V']
      },
      {
        id: 'quattro-formaggi',
        name: 'Quattro Formaggi',
        description: 'Mozzarella, goat cheese, gorgonzola, parmesan & ricotta',
        price: 14.95,
        category: 'pizza',
        dietary: ['V']
      },
      {
        id: 'quattro-stagioni',
        name: 'Quattro Stagioni',
        description: 'Ham, olives, mushrooms & artichokes',
        price: 14.95,
        category: 'pizza'
      },
      {
        id: 'suprema-picante',
        name: 'Suprema Picante',
        description: 'Ham, pepperoni, beef, peppers, olives & chilli',
        price: 14.95,
        category: 'pizza'
      },
      {
        id: 'calabrese',
        name: 'Calabrese',
        description: 'Pepperoni, spicy nduja, rocket & burrata',
        price: 14.95,
        category: 'pizza'
      },
      {
        id: 'vecchia-vegetariana',
        name: 'Vecchia Vegetariana',
        description: 'Peppers, mushrooms, onion, cherry tomato, sweetcorn & spinach',
        price: 14.95,
        category: 'pizza',
        dietary: ['V']
      },
      {
        id: 'fiorentina',
        name: 'Fiorentina',
        description: 'Egg, garlic, spinach & olives',
        price: 14.95,
        category: 'pizza',
        dietary: ['V']
      },
      {
        id: 'prosciutto-rucola',
        name: 'Prosciutto e Rucola',
        description: 'Parma ham & rocket',
        price: 14.25,
        category: 'pizza'
      },
      {
        id: 'pepperoni',
        name: 'Pepperoni',
        description: 'Mozzarella & pepperoni',
        price: 14.25,
        category: 'pizza'
      },
      {
        id: 'pescatore-pizza',
        name: 'Pescatore',
        description: 'Tomato & Nonna sauce with prawns, squid, mussels & clams',
        price: 18.95,
        category: 'pizza',
        dietary: ['F']
      },
      {
        id: 'pizza-rialto',
        name: 'Pizza Rialto',
        description: 'Nonna sauce, mozzarella & your choice of three toppings',
        price: 14.95,
        category: 'pizza'
      }
    ]
  },
  {
    id: 'secondi',
    title: '🍽 Secondi',
    displayOrder: 5,
    items: [
      {
        id: 'pollo-montecassino',
        name: 'Pollo Montecassino',
        description: 'Breaded chicken with mozzarella & Parma ham. Served with fries & salad',
        price: 17.95,
        category: 'secondi'
      },
      {
        id: 'chicken-parmigiana',
        name: 'Chicken or Veal Parmigiana',
        description: 'Breaded chicken or veal with tomato sauce, mozzarella & parmesan. Served with spaghetti',
        price: 18.95,
        category: 'secondi'
      },
      {
        id: 'anatra-rosmarino',
        name: 'Anatra al Rosmarino',
        description: 'Duck with rosemary & red wine reduction. Served with broccoli & chicory',
        price: 19.95,
        category: 'secondi'
      },
      {
        id: 'spigola-acqua-pazza',
        name: 'Spigola all\'acqua Pazza',
        description: 'Sea bass with white wine, garlic, parsley & mussels. Served with broccoli & potatoes',
        price: 18.45,
        category: 'secondi',
        dietary: ['F', 'GF']
      },
      {
        id: 'caponata-siciliana',
        name: 'Caponata Siciliana',
        description: 'Aubergines, tomatoes, olives, capers & celery. Served with crostini',
        price: 15.45,
        category: 'secondi',
        dietary: ['V', 'VE']
      },
      {
        id: 'escalope-maiale',
        name: 'Escalope di Maiale alla Senape',
        description: 'Pork escalope with grain mustard reduction & roasted potatoes',
        price: 18.95,
        category: 'secondi'
      },
      {
        id: 'osso-buco',
        name: 'Osso Buco alla Milanese',
        description: 'Veal shank in tomato & white wine reduction. Served with saffron risotto',
        price: 19.95,
        category: 'secondi'
      },
      {
        id: 'lasagna-nonna',
        name: 'Lasagna alla Nonna',
        description: 'Beef ragù, béchamel & Parmigiano. Baked until golden',
        price: 14.95,
        category: 'secondi'
      },
      {
        id: 'verdure-miste-grilla',
        name: 'Verdure Miste alla Grilla',
        description: 'Selection of seasonal grilled vegetables, served with artisanal bread and roasted potatoes',
        price: '£45.25 / £65.25',
        category: 'secondi',
        dietary: ['V', 'VE', 'GF']
      }
    ]
  },
  {
    id: 'burgers',
    title: '🍔 Burger Classici',
    displayOrder: 6,
    items: [
      {
        id: 'burger-vegetariano',
        name: 'Hamburger Vegetariano',
        description: 'Aubergine, pepper, goat cheese, salad & garlic mayo. Served with chips',
        price: 14.95,
        category: 'burgers',
        dietary: ['V']
      },
      {
        id: 'burger-manzo',
        name: 'Hamburger di Manzo',
        description: 'Beef patty with cheddar, pickles, salad & mayo. Served with chips',
        price: 14.95,
        category: 'burgers'
      },
      {
        id: 'burger-pollo',
        name: 'Hamburger di Pollo',
        description: 'Grilled or breaded chicken with salad, sweet chilli & mayo. Served with chips',
        price: 14.95,
        category: 'burgers'
      }
    ]
  },
  {
    id: 'sides',
    title: '🍴 A Parte',
    displayOrder: 7,
    items: [
      {
        id: 'patatine',
        name: 'Patatine Fritte',
        price: 4.20,
        category: 'sides'
      },
      {
        id: 'riso',
        name: 'Riso',
        price: 4.20,
        category: 'sides'
      },
      {
        id: 'spinaci',
        name: 'Spinaci all\'Aglio',
        price: 4.20,
        category: 'sides',
        dietary: ['V', 'VE', 'GF']
      },
      {
        id: 'insalata-mista',
        name: 'Insalata Mista',
        price: 4.20,
        category: 'sides',
        dietary: ['V', 'VE', 'GF']
      },
      {
        id: 'rucola-parmigiano',
        name: 'Rucola e Parmigiano',
        price: 4.20,
        category: 'sides',
        dietary: ['V', 'GF']
      },
      {
        id: 'verdure-bollite',
        name: 'Verdure Bollite',
        price: 4.20,
        category: 'sides',
        dietary: ['V', 'VE', 'GF']
      },
      {
        id: 'funghi-trifolati',
        name: 'Funghi Trifolati',
        price: 4.20,
        category: 'sides',
        dietary: ['V', 'VE', 'GF']
      },
      {
        id: 'cestino-pane',
        name: 'Cestino del Pane',
        price: 4.20,
        category: 'sides',
        dietary: ['V']
      }
    ]
  },
  {
    id: 'grilled',
    title: '🔥 Alla Griglia',
    displayOrder: 8,
    items: [
      {
        id: 'costata-manzo',
        name: 'Costata di Manzo alla Griglia 280g',
        description: 'Prime rib steak, flame-grilled. Served with rocket & cherry tomato',
        price: 25.25,
        category: 'grilled',
        dietary: ['GF']
      },
      {
        id: 'bistecca-fiorentina',
        name: 'Bistecca alla Fiorentina 600g',
        description: 'Tuscan T-bone, flame-seared & rare. Finished with olive oil & sea salt',
        price: 45.25,
        category: 'grilled',
        dietary: ['GF']
      },
      {
        id: 'tomahawk',
        name: 'Costata di Manzo Tomahawk 1kg',
        description: 'Bone-in ribeye grilled with rosemary-garlic butter. Served with rocket & cherry tomato',
        price: 85.50,
        category: 'grilled',
        dietary: ['GF']
      },
      {
        id: 'spiedino-carne',
        name: 'Spiedino di Carne',
        description: 'Lamb skewers from Abruzzo on fresh bread',
        price: 19.95,
        category: 'grilled'
      },
      {
        id: 'spiedino-verdure',
        name: 'Spiedino di Verdure',
        description: 'Aubergine, pepper, courgette & cherry tomato. Marinated with garlic & oregano',
        price: 20.25,
        category: 'grilled',
        dietary: ['V', 'VE', 'GF']
      },
      {
        id: 'spiedino-mare',
        name: 'Spiedino di Mare',
        description: 'Prawns, squid & octopus with garlic, lemon & herbs',
        price: 18.95,
        category: 'grilled',
        dietary: ['F', 'GF']
      },
      {
        id: 'bistecca-cavolfiore',
        name: 'Bistecca di Cavolfiore',
        description: 'Cauliflower steak with garlic, capers, olives, pine nuts & parsley',
        price: 23.95,
        category: 'grilled',
        dietary: ['V', 'VE', 'GF']
      },
      {
        id: 'grigliata-carne',
        name: 'Grigliata Mista di Carne',
        description: 'Lamb, chicken, sausage, beef & pork belly with grilled vegetables & fries',
        price: '£55.25 / £75.25',
        category: 'grilled'
      },
      {
        id: 'grigliata-mare',
        name: 'Frutti di Mare alla Griglia',
        description: 'Prawns, calamari, mussels, octopus & seabass with lemon-herb salmoriglio, vegetables & fries',
        price: '£65.25 / £85.25',
        category: 'grilled',
        dietary: ['F', 'GF']
      }
    ]
  }
];

// Pizza extras data
export const pizzaExtras = {
  toppings: [
    'Chilli', 'garlic', 'olives', 'sweetcorn', 'mushroom', 'egg', 'onion', 
    'pineapple', 'peppers', 'artichokes', 'capers', 'anchovy', 'rocket', 
    'spinach', 'tuna', 'ham', 'chicken', 'pepperoni', 'beef', 'nduja', 
    'Parma ham', 'mozzarella', 'ricotta', 'goat cheese', 'gorgonzola'
  ],
  extraToppingPrice: 1.75,
  crustDippers: [
    'Parmesan', 'ketchup', 'mayo', 'BBQ', 'mustard', 'tartar', 
    'garlic butter', 'garlic mayo', 'sweet chilli', 'chilli flakes'
  ],
  dipperPrice: 1.00
};
