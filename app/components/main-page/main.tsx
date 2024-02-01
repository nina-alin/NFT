"use client";

import CounterBox from "./counter-box";
import DetailsEntry from "./details-entry";
import TwoDots from "./two-dots";
import CardSwiper from "./card-swiper";
import { PiPlant } from "react-icons/pi";
import { MdHeight } from "react-icons/md";
import { LiaWeightSolid } from "react-icons/lia";
import { IoDiamondOutline } from "react-icons/io5";
import { MdCenterFocusWeak } from "react-icons/md";
import { GiCrystalGrowth } from "react-icons/gi";
import Graph from "./graph";
import { Card } from "../types/card";
import React, { useState } from "react";

type MainProps = {
  cardsIdsAndImages: { id: string; image: string }[];
  onSwipeCard: (id: string) => void;
  selectedCard: Card;
  view: "home" | "my-cards";
};

export const timer = (date: string) => {
  const dateAsDate = new Date(date);
  const now = new Date();

  const difference = dateAsDate - now;

  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor(difference / (1000 * 60 * 60));

  return {
    seconds,
    minutes,
    hours,
  };
};

const Main = ({
  cardsIdsAndImages,
  onSwipeCard,
  selectedCard,
  view,
}: MainProps) => {
  const [dateTimeStamp, setDateTimeStamp] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  setTimeout(() => {
    setDateTimeStamp(timer(selectedCard.closureDate));
  }, 1000);

  const onBuy = () => {
    console.log("buy");
  };

  const onSell = () => {
    console.log("sell");
  };

  return (
    <main className="mt-20">
      <div className="grid grid-rows-2 grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
        <div className="flex flex-col">
          <h4 className="text-4xl font-bold">n°{selectedCard.cardNumber}</h4>
          <h2 className="text-8xl font-extrabold">{selectedCard.name}</h2>
          <p className="text-md font-medium">{selectedCard.description}</p>
        </div>
        <div className="row-span-2 ml-32 xl:mb-0 mb-9">
          <CardSwiper
            cardsIdsAndImages={cardsIdsAndImages}
            onSwipeCard={onSwipeCard}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-3">
            <CounterBox number={dateTimeStamp?.hours} legends="Hours" />
            <TwoDots />
            <CounterBox number={dateTimeStamp?.minutes} legends="Min" />
            <TwoDots />
            <CounterBox number={dateTimeStamp?.seconds} legends="Sec" />
          </div>
          <div className="col-span-6 rounded-3xl bg-white shadow-lg flex justify-center items-center px-10 py-4 gap-5 mx-7">
            <p className="text-2xl font-bold flex-1">
              {selectedCard.collection}
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white shadow-lg px-10 py-4 gap-5 grid grid-cols-2">
          <DetailsEntry
            icon={<PiPlant />}
            label="Type"
            value={selectedCard.type}
          />
          <DetailsEntry
            icon={<MdHeight />}
            label="Height"
            value={`${selectedCard.size}cm`}
          />
          <DetailsEntry
            icon={<LiaWeightSolid />}
            label="Weight"
            value={`${selectedCard.weight}kg`}
          />
          <DetailsEntry
            icon={<IoDiamondOutline />}
            label="Rarity"
            value={selectedCard.rarity}
          />
          <DetailsEntry
            icon={<MdCenterFocusWeak />}
            label="Weakness"
            value={selectedCard.weakness}
          />
          <DetailsEntry
            icon={<GiCrystalGrowth />}
            label="Evolution"
            value={selectedCard.evolution}
          />
        </div>
        <div className="bg-secondary rounded-3xl px-10 py-10 mx-7 flex flex-col gap-12 text-white justify-between">
          <p className="text-5xl font-bold">${selectedCard.price}</p>
          <button className="rounded-full bg-primary px-6 py-3 flex-1 font-bold text-2xl text-secondary hover:bg-primary-hover">
            {view === "home" ? "Buy Now" : "Sell"}
          </button>
        </div>
      </div>
      <div className="bg-secondary rounded-2xl flex flex-col mt-20 text-white px-24 py-16 gap-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-semibold">
              ${selectedCard.price - selectedCard.price * 0.01}
            </p>
            <p className="font-medium text-xl">
              ${selectedCard.price * 0.01} (1%)
            </p>
          </div>
        </div>
        <Graph pastPrices={selectedCard.pastPrice} />
      </div>
    </main>
  );
};

export default Main;
