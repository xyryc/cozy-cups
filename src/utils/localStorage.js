import toast from "react-hot-toast";

// get all coffees form ls
const getAllFavourites = () => {
  const allFavourites = localStorage.getItem("cozy-cups-favourites");

  if (allFavourites) {
    const allFavouritesParsed = JSON.parse(allFavourites);
    return allFavouritesParsed;
  } else {
    return [];
  }
};

// add a coffee to ls
const addFavourite = (coffee) => {
  const favourites = getAllFavourites();

  const isExist = favourites.find((item) => item.id === coffee.id);

  if (isExist) {
    return toast.error("Already exist in favourites!");
  }

  favourites.push(coffee);
  localStorage.setItem("cozy-cups-favourites", JSON.stringify(favourites));
  toast.success("Added to favourites!");
};

// remove coffee from ls

export { addFavourite, getAllFavourites };
