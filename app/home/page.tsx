"use client";

import React, { useEffect, useState } from "react";
import Main from "../components/main-page/main";
import getContract from "../utils/get-contract";
import { cardMock } from "../components/mocks/card.mock";

const HomePage = () => {
  const [selectedCard, setSelectedCard] = useState(cardMock.at(0));

  const onSwipeCard = (id: string) => {
    setSelectedCard(cardMock.find((card) => card.id === id));
  };

  const cardsIdsAndImages = cardMock.map((card) => ({
    id: card.id,
    image: card.image,
  }));

  useEffect(() => {
    (async () => {
      const contract = await getContract();

      console.log("contract", contract);

      try {
        const response = await contract.getAllTokens();
        console.log("ici", response);
      } catch (e) {
        console.log("Error:", e);
      }
    })();
  }, []);

  return (
    <Main
      cardsIdsAndImages={cardsIdsAndImages}
      selectedCard={selectedCard}
      onSwipeCard={onSwipeCard}
    />
  );
};

export default HomePage;
