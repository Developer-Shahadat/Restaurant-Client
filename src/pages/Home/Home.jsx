import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import Category from "./Category/Category";
import Featured from "./Category/Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Card></Card>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;