import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className=" mt-10 mb-10 grid md:grid-cols-2 sm:grid-cols-1 gap-6">
        {items.map((item) => (
          <MenuItem key={item._id} items={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
      <div className="text-center mb-10 ">
      <button className=" mt-1 btn btn-outline text-black btn-xs sm:btn-sm md:btn-md border-0 border-b-4  ">
        Order Now
      </button>
      </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
