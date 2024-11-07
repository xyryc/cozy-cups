import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BeanImage from "../assets/nutrition.png";
import { addFavourite, getAllFavourites } from "../utils/localStorage";

const CoffeeDetails = () => {
  const allCoffeeData = useLoaderData();
  console.log(allCoffeeData)
  const { id } = useParams();
  const [coffee, setCoffee] = useState({});
  const [isFavourite, setIsFavourite] = useState(false);

  const {
    name,
    image,
    category,
    ingredients,
    origin,
    type,
    description,
    rating,
    popularity,
    nutrition_info,
    making_process,
  } = coffee;

  useEffect(() => {
    const singleData = allCoffeeData.find(
      (coffee) => coffee.id === parseInt(id)
    );
    setCoffee(singleData);

    const favourites = getAllFavourites();
    const isExist = favourites.find((item) => item.id === singleData.id);

    if (isExist) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  }, [allCoffeeData, id]);

  const handleFavourite = (coffee) => {
    addFavourite(coffee);
    setIsFavourite(true);
  };

  return (
    <div className="my-12">
      <h1 className="text-2xl md:text-4xl font-thin mb-6">{description}</h1>

      <div className="w-full h-full md:h-[500px] overflow-hidden rounded-xl ">
        <img
          className="w-full h-full object-cover shadow-xl"
          src={image}
          alt={name}
        />
      </div>

      <div className="flex justify-between items-center my-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-thin mb-3">{name}</h1>
          <div className="space-y-1">
            <p>Popularity: {popularity}</p>
            <p>Rating: {rating}</p>
            <p>Origin: {origin}</p>
            <p>Type: {type}</p>
            <p>Category: {category}</p>
          </div>
        </div>

        <div>
          <button
            disabled={isFavourite}
            onClick={() => handleFavourite(coffee)}
            className="btn btn-warning"
          >
            Add to Favourite
          </button>
        </div>
      </div>

      <div className="my-6">
        <h2 className="text-2xl font-thin mb-2">Making Process:</h2>
        <p className="text-base">{making_process}</p>
      </div>

      <div className="flex justify-between md:items-center flex-col-reverse md:flex-row">
        <div>
          <div className="mb-5">
            <h3 className="text-3xl font-thin mb-2">Ingredients: </h3>
            <ul>
              {ingredients &&
                ingredients.map((ingredient, index) => (
                  <li className="list-disc list-inside mb-2" key={index}>
                    {ingredient}
                  </li>
                ))}
            </ul>
          </div>

          <div>
            {nutrition_info && (
              <div>
                <h3 className="text-3xl font-thin mb-2">Nutritions: </h3>
                <ul className="list-disc list-inside">
                  <li>Calories: {nutrition_info.calories || 0}</li>
                  <li>Fat: {nutrition_info.fat || 0}g</li>
                  <li>Carbohydrates: {nutrition_info.carbohydrates || 0}g</li>
                  <li>Protein: {nutrition_info.protein || 0}g</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="md:w-[600px]">
          <img src={BeanImage} alt="coffee bean image" />
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
