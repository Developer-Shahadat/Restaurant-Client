import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import SectionTitle from '../../../component/SectionTitle/SectionTitle'
import menuBanner from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>Lotus Cafe || Menu</title>
            </Helmet>
           <Cover img={menuBanner} title='our menu' shortTitle='Would you like to try a dish?'></Cover>
            <SectionTitle subHeading = "--Don't Miss---" heading = "Today's offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
             <MenuCategory items={dessert} title={'Dessert'} coverImg={dessertImg}></MenuCategory>
             <MenuCategory items={pizza} title={'pizza'} coverImg={pizzaImg}></MenuCategory>
            <MenuCategory items={soup} title={'soup'} coverImg={soupImg}></MenuCategory>
            <MenuCategory items={salad} title={'salad'} coverImg={saladImg}></MenuCategory>
          
        </div>
    );
};

export default Menu;