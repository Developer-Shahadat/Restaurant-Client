import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";

import NavBar from "../pages/shared/NavBar/NavBar";
import Home from "../pages/Home/Home";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Outlet></Outlet>
           <Home></Home>
           <Footer></Footer>
        </div>
    );
};

export default Main;