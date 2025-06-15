const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Game = require('./models/Game');

dotenv.config();

const defaultGames = [
  {
    title: "The Witcher 3: Wild Hunt",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    rating: 4.8,
    genre: "RPG",
    description: "The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher.",
    price: "$29.99",
    systemSpecs: {
      os: "Windows 7/8/10 64-bit",
      processor: "Intel CPU Core i5-2500K 3.3GHz",
      memory: "8 GB RAM",
      graphics: "Nvidia GPU GeForce GTX 660",
      storage: "35 GB available space"
    },
    reviews: [
      {
        stars: 5,
        review: "One of the best RPGs ever made!"
      }
    ],
    comments: [
      {
        comment: "Amazing game with great storytelling"
      }
    ]
  },
  {
    title: "Red Dead Redemption 2",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    rating: 4.7,
    genre: "Action Adventure",
    description: "Red Dead Redemption 2 is a western-themed action-adventure game set in an open world environment featuring a fictionalized version of the Western, Midwestern, and Southern United States in 1899.",
    price: "$59.99",
    systemSpecs: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-2500K / AMD FX-6300",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 770 2GB / AMD Radeon R9 280 3GB",
      storage: "150 GB available space"
    },
    reviews: [
      {
        stars: 5,
        review: "Incredible open world and story"
      }
    ],
    comments: [
      {
        comment: "The attention to detail is mind-blowing"
      }
    ]
  },
  {
    title: "Cyberpunk 2077",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
    rating: 4.5,
    genre: "RPG",
    description: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
    price: "$49.99",
    systemSpecs: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-3570K or AMD FX-8310",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 780 3GB or AMD Radeon RX 470",
      storage: "70 GB available space"
    },
    reviews: [
      {
        stars: 4,
        review: "Great story and world design"
      }
    ],
    comments: [
      {
        comment: "The city feels alive and immersive"
      }
    ]
  },
  {
    title: "Elden Ring",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
    rating: 4.9,
    genre: "Action RPG",
    description: "Elden Ring is an action role-playing game set in a new fantasy world created by Hidetaka Miyazaki and George R. R. Martin. Players explore the Lands Between, a vast world filled with danger and discovery.",
    price: "$59.99",
    systemSpecs: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-8400 / AMD Ryzen 3 3300X",
      memory: "12 GB RAM",
      graphics: "NVIDIA GeForce GTX 1060 3GB / AMD Radeon RX 580 4GB",
      storage: "60 GB available space"
    },
    reviews: [
      {
        stars: 5,
        review: "A masterpiece of game design"
      }
    ],
    comments: [
      {
        comment: "The open world is breathtaking"
      }
    ]
  },
  {
    title: "God of War Ragnarök",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1593500/header.jpg",
    rating: 4.8,
    genre: "Action Adventure",
    description: "God of War Ragnarök is an action-adventure game that continues the story of Kratos and Atreus as they face the coming of Ragnarök in the Norse realm.",
    price: "$69.99",
    systemSpecs: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-6600k / AMD Ryzen 5 1600",
      memory: "16 GB RAM",
      graphics: "NVIDIA GTX 1060 6GB / AMD RX 570 4GB",
      storage: "120 GB available space"
    },
    reviews: [
      {
        stars: 5,
        review: "Epic storytelling and combat"
      }
    ],
    comments: [
      {
        comment: "The father-son relationship is beautifully portrayed"
      }
    ]
  },
  {
    title: "Baldur's Gate 3",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
    rating: 4.7,
    genre: "RPG",
    description: "Baldur's Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
    price: "$59.99",
    systemSpecs: {
      os: "Windows 10 64-bit",
      processor: "Intel i5-4690 / AMD FX 4350",
      memory: "8 GB RAM",
      graphics: "NVIDIA GTX 780 / AMD Radeon R9 280X",
      storage: "150 GB available space"
    },
    reviews: [
      {
        stars: 5,
        review: "A true D&D experience"
      }
    ],
    comments: [
      {
        comment: "The choices and consequences are incredible"
      }
    ]
  },
  {
    title: "Starfield",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/1716740/header.jpg",
    rating: 4.6,
    genre: "RPG",
    description: "Starfield is a next-generation role-playing game set in space, where you'll create your own character and explore the vast universe, encountering unique characters and engaging in epic space adventures.",
    price: "$69.99",
    systemSpecs: {
      os: "Windows 10/11 64-bit",
      processor: "AMD Ryzen 5 2600X / Intel Core i7-6800K",
      memory: "16 GB RAM",
      graphics: "AMD Radeon RX 5700 / NVIDIA GeForce GTX 1070 Ti",
      storage: "125 GB available space"
    },
    reviews: [
      {
        stars: 4,
        review: "Ambitious space exploration"
      }
    ],
    comments: [
      {
        comment: "The scale of the universe is impressive"
      }
    ]
  },
  {
    title: "Hogwarts Legacy",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/990080/header.jpg",
    rating: 4.7,
    genre: "Action RPG",
    description: "Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s.",
    price: "$59.99",
    systemSpecs: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-6600 / AMD Ryzen 5 1400",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce GTX 960 4GB / AMD Radeon RX 470 4GB",
      storage: "85 GB available space"
    },
    reviews: [
      {
        stars: 5,
        review: "A magical experience for Potter fans"
      }
    ],
    comments: [
      {
        comment: "The castle is beautifully recreated"
      }
    ]
  },
  {
    title: "Resident Evil 4 Remake",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/2050650/header.jpg",
    rating: 4.8,
    genre: "Survival Horror",
    description: "Resident Evil 4 Remake is a reimagining of the 2005 classic, featuring modernized gameplay, a reimagined storyline, and stunning graphics while maintaining the essence of the original game.",
    price: "$59.99",
    systemSpecs: {
      os: "Windows 10 64-bit",
      processor: "AMD Ryzen 3 1200 / Intel Core i5-7500",
      memory: "8 GB RAM",
      graphics: "AMD Radeon RX 560 / NVIDIA GeForce GTX 1050 Ti",
      storage: "60 GB available space"
    },
    reviews: [
      {
        stars: 5,
        review: "A perfect remake of a classic"
      }
    ],
    comments: [
      {
        comment: "The new combat system is amazing"
      }
    ]
  }
];

const seedGames = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    // Clear existing games
    await Game.deleteMany({});
    
    // Insert new games
    await Game.insertMany(defaultGames);
    
    console.log('Default games added successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding games:', error);
    process.exit(1);
  }
};

seedGames(); 