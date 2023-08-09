export default function CountryCard({ setClickedIndex, clickedIndex, countries }) {
  const onCardClicked = (index) => {
    setClickedIndex(index);
  };

  return (
    <>
      {countries.map(({ code, name, emoji, capital, currencies, continent, languages }, index) => (
        <div
          onClick={() => onCardClicked(index)}
          key={code}
          className={`flex-1 min-w-[20%] h-52 hover:shadow-lg hover:shadow-indigo-100 transition-shadow bg-slate-100 rounded-md card ${
            clickedIndex === index ? "flip" : ""
          }`}
          data-aos="fade-down"
        >
          <div className="relative w-full h-full p-2 card-wrapper">
            <div className="flex flex-col justify-center  card-front text-left p-4">
              <p className="text-6xl text-center">{emoji}</p>
              <h1 className="text-center font-bold text-xl mb-2">{name}</h1>
              <p>Capital: {capital || "N/A"}</p>
              <p>Currency: {currencies[0] || "N/A"}</p>
            </div>
            <div className="flex flex-col justify-center card-back">
              <p className="text-center text-base px-2 font-semibold">
                This country is located in the continent of {continent.name}. The people in this country speak{" "}
                {languages.length ? languages[0].name : "English"} as their native language.
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
