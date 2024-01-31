import React from "react";

type DetailsEntryProps = Readonly<{
  icon: JSX.Element;
  label: string;
  value: string;
}>;

const DetailsEntry = ({ icon, label, value }: DetailsEntryProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="text-4xl flex justify-center items-center text-tertiary">
        {icon}
      </div>
      <div className="flex flex-col font-semibold">
        <p className="text-tertiary">{label}</p>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default DetailsEntry;
