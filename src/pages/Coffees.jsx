import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  console.log(data)
  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      const sorted = [...data].sort((a, b) => b.popularity - a.popularity);
      setCoffees(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sorted);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between items-center my-12 space-y-4 lg:space-y-0">
        <div className="text-3xl font-thin">
          <h1>Sort Coffee&apos;s by Popularity & Rating-&gt;</h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => {
              handleSort("popularity");
            }}
            className="btn btn-warning"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning"
          >
            Sort By Rating
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
