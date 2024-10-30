
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
      
    //     .then(data =>{
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)})
    // },[])
    return (
        <section>
            <SectionTitle
            heading="FROM OUR MENU"
            subHeading="Check it out"
            >
            </SectionTitle>

            <div className=" mt-10 mb-10 grid md:grid-cols-2 sm:grid-cols-1 gap-6">
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    items={item}
                    ></MenuItem>)
                }
            </div>
            <div className="text-center mb-10">
                <button className=" mt-1 btn btn-outline btn-xs  sm:btn-sm md:btn-md border-0 border-b-4  ">View Full Menu</button></div>
            <div className="bg-black w-6/12 h-24 mx-auto pt-8 text-center text-white rounded-lg mb-8">
                <h1 className="text-center text-2xl">Call Us : +8801628641717</h1>
            </div>
        </section>
    );
};

export default PopularMenu;