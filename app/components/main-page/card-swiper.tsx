"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

type CardSwiperProps = {
  cardsIdsAndImages: { id: number; image: string }[];
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
        <SwiperSlide key={card.id} tabIndex={card.id}>
          <div className="bg-slate-50 h-[50vh] w-80 rounded-2xl border-black border-4 flex items-center justify-center">
            <img src={card.image} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSwiper;
