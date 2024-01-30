import { Card, CardRarity } from "../types/card";

export const cardMock: Card[] = [
  {
    id: "1",
    title: "Bulbasaur",
    number: 1,
    rarity: CardRarity.COMMON,
    type: "Grass",
    weight: 6.9,
    weaknesses: ["Fire", "Flying", "Ice", "Psychic"],
    height: 0.7,
    evolution: "Ivysaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    limitDate: "2024-12-31",
    poster: {
      id: "1",
      name: "Ash Ketchum",
      avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    price: 100,
    transactionCost: 10,
    pastPrices: [
      {
        date: "2021-01-01",
        price: 100,
      },
      {
        date: "2021-01-02",
        price: 110,
      },
      {
        date: "2021-01-03",
        price: 120,
      },
    ],
  },
  {
    id: "2",
    title: "Ivysaur",
    number: 2,
    rarity: CardRarity.UNCOMMON,
    type: "Grass",
    weight: 13,
    weaknesses: ["Fire", "Flying", "Ice", "Psychic"],
    height: 1,
    evolution: "Venusaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    limitDate: "2021-12-31",
    poster: {
      id: "1",
      name: "Ash Ketchum",
      avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    price: 200,
    transactionCost: 20,
    pastPrices: [
      {
        date: "2021-01-01",
        price: 200,
      },
      {
        date: "2021-01-02",
        price: 210,
      },
      {
        date: "2021-01-03",
        price: 220,
      },
      {
        date: "2021-01-04",
        price: 250,
      },
    ],
  },
  {
    id: "3",
    title: "Venusaur",
    number: 3,
    rarity: CardRarity.RARE,
    type: "Grass",
    weight: 100,
    weaknesses: ["Fire", "Flying", "Ice", "Psychic"],
    height: 2,
    evolution: "Venusaur",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    limitDate: "2021-12-31",
    poster: {
      id: "1",
      name: "Ash Ketchum",
      avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    price: 300,
    transactionCost: 30,
    pastPrices: [
      {
        date: "2021-01-01",
        price: 300,
      },
      {
        date: "2021-01-02",
        price: 310,
      },
      {
        date: "2021-01-03",
        price: 320,
      },
    ],
  },
  {
    id: "4",
    title: "Charmander",
    number: 4,
    rarity: CardRarity.COMMON,
    type: "Fire",
    weight: 8.5,
    weaknesses: ["Ground", "Rock", "Water"],
    height: 0.6,
    evolution: "Charmeleon",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    limitDate: "2021-12-31",
    poster: {
      id: "1",
      name: "Ash Ketchum",
      avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    price: 400,
    transactionCost: 40,
    pastPrices: [
      {
        date: "2021-01-01",
        price: 400,
      },
      {
        date: "2021-01-02",
        price: 410,
      },
      {
        date: "2021-01-03",
        price: 420,
      },
    ],
  },
  {
    id: "5",
    title: "Charmeleon",
    number: 5,
    rarity: CardRarity.UNCOMMON,
    type: "Fire",
    weight: 19,
    weaknesses: ["Ground", "Rock", "Water"],
    height: 1.1,
    evolution: "Charizard",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
    limitDate: "2021-12-31",
    poster: {
      id: "1",
      name: "Ash Ketchum",
      avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    price: 500,
    transactionCost: 50,
    pastPrices: [
      {
        date: "2021-01-01",
        price: 500,
      },
      {
        date: "2021-01-02",
        price: 510,
      },
      {
        date: "2021-01-03",
        price: 520,
      },
    ],
  },
  {
    id: "6",
    title: "Charizard",
    number: 6,
    rarity: CardRarity.RARE,
    type: "Fire",
    weight: 90.5,
    weaknesses: ["Ground", "Rock", "Water"],
    height: 1.7,
    evolution: "Charizard",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
    limitDate: "2021-12-31",
    poster: {
      id: "1",
      name: "Ash Ketchum",
      avatar: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    price: 600,
    transactionCost: 60,
    pastPrices: [
      {
        date: "2021-01-01",
        price: 600,
      },
      {
        date: "2021-01-02",
        price: 610,
      },
      {
        date: "2021-01-03",
        price: 620,
      },
    ],
  },
];
