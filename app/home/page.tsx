"use client";

import { useState } from "react";
import Main from "../components/main-page/main";
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

  return (
    <Main
      cardsIdsAndImages={cardsIdsAndImages}
      onSwipeCard={onSwipeCard}
      selectedCard={selectedCard}
    />
  );
};

export default HomePage;
