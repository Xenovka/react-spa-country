import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import CountryCard from "./components/CountryCard";
import SearchBar from "./components/SearchBar";

const GET_COUNTRIES = gql`
  query {
    countries {
      states {
        name
      }
      code
      name
      currencies
      capital
      emoji
      continent {
        name
      }
      languages {
        name
        native
      }
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  const [searchResult, setSearchResult] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    setClickedIndex(null);
  }, [searchResult]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="p-6">
      <SearchBar setSearchResult={setSearchResult} countries={data.countries} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3 justify-center text-center">
        <CountryCard
          setClickedIndex={setClickedIndex}
          clickedIndex={clickedIndex}
          countries={searchResult ? searchResult : data.countries}
        />
      </div>
    </div>
  );
}
