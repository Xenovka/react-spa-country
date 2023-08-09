import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
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
    <div className="flex flex-wrap gap-3 justify-between h-screen text-center p-2">
      {data.countries.map(({ code, name, emoji }) => (
        <div key={code} className="bg-slate-300 flex-1 min-w-[20%] rounded-md">
          <p>{emoji}</p>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
}
