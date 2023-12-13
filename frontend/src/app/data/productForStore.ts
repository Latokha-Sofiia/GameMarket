import {GamingProducts} from '../models/productForStore'
export const products: GamingProducts[] = [
  {
    id: 1,
    gamesName: 'Baldur’s Gate III',
    price: 109.95,
    description: "computer role-playing game developed and published by the Belgian company Larian Studios. Baldur's Gate 3 was a continuation of the Baldur's Gate series",
    category: ['Role-playing', 'Strategy'],
    image: 'https://upload.wikimedia.org/wikipedia/ru/d/dc/Baldur%27s_Gate_III_Logo.png',
    rating: {
      rate: 4.5,
      count: 1240
    }
  },
  {
    id: 2,
    gamesName: 'Divinity',
    price: 80.98,
    description: 'the next RPG in the Divinity universe. The player controls two characters, created at the beginning of the game. The player is free to independently choose the skills, characteristics, traits, appearance and gender of both characters. In the future, a love relationship may develop between them. Battles will take place in a turn-based mode, based on classic mechanics: action points, flank attacks, backstabs, free attacks and character interaction bonuses',
    category: ['Strategy'],
    image: 'https://korobok.store/upload/iblock/5fd/avri65keqj1yh8aq63bfj5ii35fvzovp.jpg',
    rating: {
      rate: 5.0,
      count: 990
    }
  },
]
