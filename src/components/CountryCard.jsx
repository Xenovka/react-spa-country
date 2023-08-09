import { useState } from "react";

export default function CountryCard({ countries }) {
  const [clickedIndex, setClickedIndex] = useState(null);

  const onCardClicked = (index) => {
    setClickedIndex(index);
  };

  return (
    <>
      {countries.map(({ code, name, emoji, capital, currencies, continent, languages }, index) => (
        <div
          onClick={() => onCardClicked(index)}
          key={code}
          className={`flex-1 min-w-[20%] h-52 card ${clickedIndex === index ? "flip" : ""}`}
        >
          <div className="relative w-full h-full p-2 card-wrapper">
            <div className="flex flex-col justify-center bg-slate-200 card-front text-left p-4">
              <p className="text-6xl text-center">{emoji}</p>
              <h1 className="text-center font-bold text-xl">{name}</h1>
              <p>Capital: {capital || "N/A"}</p>
              <p>Currency: {currencies[0] || "N/A"}</p>
            </div>
            <div className="flex flex-col justify-center bg-slate-400 card-back">
              <h1>{continent.name}</h1>
              <h1>{languages.length <= 0 ? "N/A" : languages[0].name}</h1>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
