const CardItem = ({ items }) => {
  const { name, image, recipe } = items;
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="card bg-base-100 w-72 shadow-xl">
        <figure>
          <img src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions ">
            <button className=" mt-1 btn btn-outline btn-xs sm:btn-sm md:btn-md border-0 border-b-4  ">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
