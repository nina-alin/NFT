"use client";

import { useEffect, useId, useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";

type GraphProps = {
  pastPrices: { date: string; price: number }[];
};

const Graph = ({ pastPrices }: GraphProps) => {
  const data = useMemo(
    () => [
      {
        label: "Series 1",
        data: pastPrices.map((price) => ({
          date: new Date(price.date),
          price: price.price,
        })),
      },
    ],
    [pastPrices]
  );

  const primaryAxis = useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum) => datum.date as unknown as Date,
    }),
    []
  );

  const secondaryAxes = useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.price,
      },
    ],
    []
  );

  return (
    <div className="w-full h-64">
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
        }}
      />
    </div>
  );
};

export default Graph;
