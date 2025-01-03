import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p className="bg-slate-900 text-white absolute top-4 right-4 p-2">
          ${price}
        </p>
        <div className="card-body flex flex-col items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.length > 40 ? recipe.slice(0, 70) + "..." : recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-b-4 border-orange-400 bg-slate-100">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
