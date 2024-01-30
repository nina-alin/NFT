import { User } from "./user";

export enum CardRarity {
  COMMON = "COMMON",
  UNCOMMON = "UNCOMMON",
  RARE = "RARE",
  LEGENDARY = "LEGENDARY",
}

export type Card = {
  id: string;
  title: string;
  number: number;
  rarity: CardRarity;
  type: string;
  weight: number;
  weaknesses: string[];
  height: number;
  evolution: string;
  image: string;
  limitDate: string;
  poster: User;
  price: number;
  transactionCost: number;
  pastPrices: {
    date: string;
    price: number;
  }[];
};
