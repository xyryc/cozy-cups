/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";


const Card = ({ coffee, handleRemove }) => {
  const { name, image, category, origin, type, id, rating, popularity } =
    coffee || {};

  const { pathname } = useLocation();

  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${id}`}
        className="transition hover:scale-105 duration-500 shadow-xl rounded-xl overflow-hidden"
      >
        <figure className="w-full h-48 overflow-hidden">
          <img src={image} alt="" />
        </figure>
        <div className="p-4">
          <h1 className="text-xl ">Name: {name}</h1>
          <p>Category: {category}</p>
          <p>Type: {type}</p>
          <p>Origin: {origin}</p>
          <p>Rating: {rating}</p>
          <p>Popularity: {popularity}</p>
        </div>
      </Link>
      {pathname === '/dashboard' && <p 
        onClick={()=> handleRemove(id)}
      className="absolute cursor-pointer -top-5 -right-5 p-3 bg-warning rounded-full">
        <MdDeleteForever size={20}/>
        </p>}
    </div>
  );
};

export default Card;
