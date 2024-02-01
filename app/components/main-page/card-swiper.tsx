"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import React from "react";
import Image from "next/image";

type CardSwiperProps = {
  cardsIdsAndImages: { id: string; image: string }[];
  onSwipeCard: (id: string) => void;
};

const CardSwiper = ({ cardsIdsAndImages, onSwipeCard }: CardSwiperProps) => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      loop={true}
      onSlideChange={(swiperCore) =>
        onSwipeCard(cardsIdsAndImages[swiperCore.realIndex].id.toString())
      }
    >
      {cardsIdsAndImages.map((card) => (
        <SwiperSlide key={card.id} tabIndex={parseInt(card.id)}>
          <div className="bg-slate-50 h-fit w-80 rounded-2xl border-black overflow-hidden border-4 flex items-center justify-center">
            <Image alt="nft" width={600} height={600} src={card.image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
