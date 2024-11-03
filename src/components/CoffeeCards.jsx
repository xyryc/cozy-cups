import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
  const navigate = useNavigate();
  const [coffees, setCoffees] = useState([]);

  const { category } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (category) {
      const filteredCategory = [...data].filter(
        (coffee) => coffee.category === category
      );
      setCoffees(filteredCategory);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [category, data]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
      <button
        className="btn btn-warning"
        onClick={() => {
          navigate("/coffees");
        }}
      >
        View All
      </button>
    </>
  );
};

export default CoffeeCards;
