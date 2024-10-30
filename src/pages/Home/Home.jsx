import Banner from "./Banner/Banner";
import Card from "./Card/Card";
import Category from "./Category/Category";
import Featured from "./Category/Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
          <Helmet>
                <title>Lotus Cafe || Home</title>
            </Helmet>
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