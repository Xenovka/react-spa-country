import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      currency
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
    <div className="flex flex-wrap justify-between h-screen text-center">
      {data.countries.map((country, index) => (
        <div key={index} className="">
          <h1>{country.name}</h1>
        </div>
      ))}
    </div>
  );
}
