"use client";

import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import CounterBox from "./components/main-page/counter-box";
import TwoDots from "./components/main-page/two-dots";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-20 gap-28">
      <h1 className="text-7xl font-extrabold uppercase text-center tracking-wider">
        Collect & Sell
        <br />
        Super rare Pokemon NFTS
      </h1>
      <div className="flex justify-between items-center gap-36">
        <div className="flex flex-col gap-16 rounded-3xl bg-white shadow-lg p-9">
          <p className="text-xl font-medium">
            An Expansive Place to Collect, Exchange, <br />
            and Own your virtual experience.
          </p>
          <div className="flex text-lg font-medium gap-5 items-center">
            <div className="flex">
              <div className="bg-tertiary rounded-full w-14 h-14 border-secondary border-2 overflow-hidden">
                <Image
                  src={"/pokemon-1.jpg"}
                  alt="pokemon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="bg-tertiary rounded-full w-14 h-14 border-secondary border-2 ml-[-15px] overflow-hidden">
                <Image
                  src={"/pokemon-2.jpg"}
                  alt="pokemon"
                  width={60}
                  height={60}
                />
              </div>
              <div className="bg-tertiary rounded-full w-14 h-14 border-secondary border-2 ml-[-15px] overflow-hidden">
                <Image
                  src={"/pokemon-3.jpg"}
                  alt="pokemon"
                  width={60}
                  height={60}
                />
              </div>
            </div>
            <p>Meet with our Creators.</p>
          </div>
        </div>
        <div className="bg-tertiary rounded-full w-96 h-60 border-secondary border-2 overflow-hidden">
          <Image
            id="img-animation"
            src={"/pokemon-4.jpg"}
            alt="pokemon"
            width={800}
            height={800}
          />
        </div>
        <div className="flex flex-col gap-10 rounded-3xl bg-white shadow-lg p-9">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-5xl font-extrabold">5K+</p>
              <p className="font-medium text-xl">Creators</p>
            </div>
            <div className="flex flex-col">
              <p className="text-5xl font-extrabold">48K</p>
              <p className="font-medium text-xl">Cards</p>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-full border-secondary border-2 px-2 py-2 w-80">
            <p className="ml-4 font-medium text-lg">Explore all cards</p>
            <Link href="/home">
              <div className="flex transition-colors items-center justify-center w-14 h-14 bg-primary hover:bg-primary-hover rounded-full cursor-pointer">
                <MdArrowOutward />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-20">
        <div className="bg-red-700 h-[50vh] w-80 rounded-2xl border-black border-4">
          Slide 1
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex items-center justify-center gap-3">
            <CounterBox number={11} legends="Hours" />
            <TwoDots />
            <CounterBox number={73} legends="Min" />
            <TwoDots />
            <CounterBox number={46} legends="Sec" />
          </div>
          <div className="col-span-6 rounded-3xl bg-white shadow-lg flex justify-center items-center px-10 py-4 gap-5 mx-7">
            <Image
              className="rounded-xl"
              src="/placeholder.svg"
              alt="profile picture"
              width={50}
              height={50}
            />
            <p className="text-2xl font-bold flex-1">John Doe</p>
          </div>
        </div>
      </div>
    </main>
  );
}
