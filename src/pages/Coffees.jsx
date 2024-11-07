import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Coffees = () => {
  const data = useLoaderData()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
    {data.map((coffee) => (
      <Card key={coffee.id} coffee={coffee}></Card>
    ))}
  </div>
  );
};

export default Coffees;
