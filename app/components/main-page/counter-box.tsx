import React from "react";

type CounterBoxProps = Readonly<{
  number: number;
  legends: string;
}>;

const CounterBox = ({ number, legends }: CounterBoxProps) => {
  return (
    <div className="rounded-3xl bg-white shadow-lg flex flex-col justify-center items-center px-14 py-4">
      <p className="text-3xl font-bold">{number}</p>
      <p className="text-xl font-bold text-tertiary">{legends}</p>
    </div>
  );
};

export default CounterBox;
