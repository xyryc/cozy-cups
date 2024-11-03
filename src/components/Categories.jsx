/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div role="tablist" className="tabs">
      {categories.map((category) => (
        <Link key={category.category} to="/cards" role="tab" className="tab">
          {category.category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
