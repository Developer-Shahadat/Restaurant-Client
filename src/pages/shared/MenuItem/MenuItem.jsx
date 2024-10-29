
const MenuItem = ({items}) => {
    const {name, image , recipe , price} = items;
    return (
        <div className="flex space-x-1">
            <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-18 h-16" src={image} alt="" />
            <div className="text-center">
                <h3 className="uppercase font-medium text-emerald-400">{name} ----- </h3>
                <p className="font-normal p-1 ">{recipe}</p>
            </div>
            <p className="text-yellow-600 font-semibold">${price}</p>
        </div>
    );
};

export default MenuItem;