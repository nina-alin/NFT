export enum CardRarity {
  COMMON = "COMMON",
  UNCOMMON = "UNCOMMON",
  RARE = "RARE",
  LEGENDARY = "LEGENDARY",
}

export type Card = {
  id: string;
  name: string;
  cardNumber: number;
  rarity: string;
  attributes: string[];
  description: string;
  evolution: string;
  image: string;
  size: string;
  type: string;
  weakness: string;
  weight: string;
  collection: string;
  pastPrice: Array<{ date: string; price: string }>;
  price: string;
};
