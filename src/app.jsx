import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import CountryCard from "./components/CountryCard";
import SearchBar from "./components/SearchBar";
import Spinner from "./components/Spinner";

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

  // state to keep track of the search result from the search bar
  const [searchResult, setSearchResult] = useState(null);
  const [isCountryNotFound, setIsCountryNotFound] = useState(false);
  // state to keep track of the clicked card index
  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    // Reset clickedIndex value so the flip class also removed from the current card
    setClickedIndex(null);
  }, [searchResult]);

  // Showing loading spinner while fetching countries data
  if (loading) return <Spinner />;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="p-6">
      <SearchBar
        setSearchResult={setSearchResult}
        setIsCountryNotFound={setIsCountryNotFound}
        countries={data.countries}
      />

      {/* Check whether the country that user search for is found or not */}
      {isCountryNotFound ? (
        <div className="text-center">
          <p className="text-4xl">Country not found...</p>
        </div>
      ) : (
        //Using display Grid to ensure the responsiveness of the cards on different screen sizes
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3 justify-center text-center">
          <CountryCard
            setClickedIndex={setClickedIndex}
            clickedIndex={clickedIndex}
            countries={searchResult ? searchResult : data.countries}
          />
        </div>
      )}
    </div>
  );
}
