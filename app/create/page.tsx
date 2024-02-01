"use client";

import React, { useState } from "react";
import { Card } from "../components/types/card";

const CreatePage = () => {
  const [createForm, setCreateForm] = useState<
    Omit<Card, "id" | "cardNumber" | "attributes">
  >({
    name: "",
    description: "",
    image: "",
    rarity: "",
    evolution: "",
    size: "",
    type: "",
    weakness: "",
    weight: "",
  });

  const inputs = [
    "name",
    "description",
    "rarity",
    "evolution",
    "size",
    "type",
    "weakness",
    "weight",
  ];

  return (
    <main className="mt-10 flex flex-col gap-10">
      <h2 className="text-3xl font-extrabold">Create a NFT</h2>
      <div className="flex gap-10 items-center flex-wrap justify-between">
        {inputs.map((input) => (
          <div className="flex flex-col gap-2" key={input}>
            <label className="font-medium text-lg" htmlFor={input}>
              {/* capitalize the firdt letter */}
              {input.charAt(0).toUpperCase() + input.slice(1)}
            </label>
            <input
              id={input}
              className="border-2 border-black rounded-lg px-4 py-2 w-96"
              value={createForm[input as keyof typeof createForm]}
              onChange={(e) =>
                setCreateForm((prev) => ({
                  ...prev,
                  [input]: e.target.value,
                }))
              }
            />
          </div>
        ))}
      </div>
      <button
        className="self-end bg-secondary text-white hover:bg-white hover:text-secondary transition-colors px-6 py-3 rounded-full font-bold text-xl"
        onClick={() => {
          console.log("createForm", createForm);
        }}
      >
        Create
      </button>
    </main>
  );
};

export default CreatePage;
