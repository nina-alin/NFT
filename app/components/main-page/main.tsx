"use client";

import CounterBox from "./counter-box";
import DetailsEntry from "./details-entry";
import TwoDots from "./two-dots";
import Image from "next/image";
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
  cardsIdsAndImages: { id: number; image: string }[];
  onSwipeCard: (id: string) => void;
  selectedCard: Card;
};

const timer = (date: string) => {
  const timeStampDate = new Date(date).getTime();
  const now = new Date().getTime();
  const difference = timeStampDate - now;

  const seconds = Math.floor((difference / 1000) % 60);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  return {
    seconds,
    minutes,
    hours,
  };
};

const Main = ({ cardsIdsAndImages, onSwipeCard, selectedCard }: MainProps) => {
  const [dateTimeStamp, setDateTimeStamp] = useState<{
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);

  setTimeout(() => {
    setDateTimeStamp(timer(selectedCard.limitDate));
  }, 1000);

  return (
    <main className="mt-20">
      <div className="grid grid-rows-2 grid-cols-3">
        <div className="flex flex-col">
          <h4 className="text-4xl font-bold">n°{selectedCard.number}</h4>
          <h2 className="text-8xl font-extrabold">{selectedCard.title}</h2>
          <h6 className="text-2xl font-bold">{selectedCard.rarity} NFT</h6>
        </div>
        <div className="row-span-2 ml-24">
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
            <Image
              className="rounded-xl"
              src={selectedCard.poster.avatar}
              alt="profile picture"
              width={50}
              height={50}
            />
            <p className="text-2xl font-bold flex-1">
              {selectedCard.poster.name}
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
            value={`${selectedCard.height}cm`}
          />
          <DetailsEntry
            icon={<LiaWeightSolid />}
            label="Weight"
            value={`${selectedCard.height}kg`}
          />
          <DetailsEntry
            icon={<IoDiamondOutline />}
            label="Rarity"
            value={selectedCard.rarity}
          />
          <DetailsEntry
            icon={<MdCenterFocusWeak />}
            label="Weaknesses"
            value={selectedCard.weaknesses.join(", ")}
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
            Buy Now
          </button>
        </div>
      </div>
      <div className="bg-secondary rounded-2xl flex flex-col mt-20 text-white px-24 py-16 gap-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="text-5xl font-semibold">
              ${selectedCard.price + selectedCard.transactionCost}
            </p>
            <p className="font-medium text-xl">
              ${selectedCard.transactionCost} (23.55%)
            </p>
          </div>
        </div>
        <Graph pastPrices={selectedCard.pastPrices} />
      </div>
    </main>
  );
};

export default Main;
