const FoodCard = ({ items }) => {
  const { name, image, recipe, price } = items;
  return (
    <div>
      <div className="card bg-base-100 w-80 shadow-xl">
        <figure>
          <img
            src={image}
          
          />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mx-4 mt-4 p-2 rounded-lg">${price}</p>
        <div className="card-body">
            
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
