export default function SearchBar({ setSearchResult, countries }) {
  const handleSearchInput = (e) => {
    const input = e.target.value.toLowerCase();
    const result = countries.filter((country) => country.name.toLowerCase().includes(input));
    setSearchResult(result);
  };

  return (
    <div className="w-1/2 h-10 mx-auto gap-2 mb-6">
      <input
        className="border-2 focus:outline-none rounded-md w-full p-2 bg-slate-200 placeholder-slate-400 focus:shadow-md focus:shadow-indigo-100 transition-shadow duration-300 border-none"
        type="text"
        placeholder="Search Country..."
        onChange={handleSearchInput}
      />
    </div>
  );
}
