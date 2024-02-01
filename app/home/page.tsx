"use client";

import React, { useEffect, useState } from "react";
import Main from "../components/main-page/main";
import getContract from "../utils/get-contract";
import { Card } from "../components/types/card";

const HomePage = () => {
  const [selectedCard, setSelectedCard] = useState<Card>();
  const [cards, setCards] = useState<Card[]>([]);
  const [cardsIdsAndImages, setCardsIdsAndImages] = useState<
    Array<{ id: string; image: string }>
  >([]);

  const onSwipeCard = (id: string) => {
    setSelectedCard(cards.find((card) => card.id === id));
  };

  useEffect(() => {
    // execute async function since useEffect can't be async
    (async () => {
      const contract = await getContract();

      try {
        // get all tokens ids
        const response: string = await contract?.getAllTokens();
        const cardsIds = response.toString().split(",");

        // get all tokens data
        const cardsRes: Card[] = await Promise.all(
          cardsIds.map(async (cardId) => {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_IFPS_API_URL}/${cardId}`,
              {
                method: "GET",
              }
            );

            // try {
            //   await response.json();
            // } catch (e) {
            //   console.log("Error", e, cardId);
            // }

            const data = await response.json();

            // return card data with id
            return response.ok ? { ...data, id: cardId } : Promise.reject(data);
          })
        );

        setCards(cardsRes);

        // set a variable with cards ids and images
        setCardsIdsAndImages(
          cardsRes.map((card) => ({
            id: card.id,
            image: `${process.env.NEXT_PUBLIC_IFPS_BASE_URL}/${card.image.slice(
              7
            )}`,
          }))
        );

        console.log(
          "cardsRes",
          cardsRes.map((card) => ({
            id: card.id,
            image: `${process.env.NEXT_PUBLIC_IFPS_BASE_URL}/${card.image.slice(
              7
            )}`,
          }))
        );

        // set the first card as selected by default
        setSelectedCard(cardsRes[0]);

        console.log("cardsRes", cardsRes[0]);
      } catch (e) {
        console.error("Error:", e);
      }
    })();
  }, []);

  if (!selectedCard) {
    return (
      <div className="relative h-1/3">
        <div className="absolute left-0 right-0 grid place-items-center h-full">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <Main
      cardsIdsAndImages={cardsIdsAndImages}
      selectedCard={selectedCard}
      onSwipeCard={onSwipeCard}
    />
  );
};

export default HomePage;
