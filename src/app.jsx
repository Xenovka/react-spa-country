import React from "react";
import { useQuery, gql } from "@apollo/client";
import CountryCard from "./components/CountryCard";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
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
      }
    }
  }
`;

export default function App() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="flex flex-wrap gap-3 justify-between h-screen text-center p-6">
      <CountryCard countries={data.countries} />
    </div>
  );
}
