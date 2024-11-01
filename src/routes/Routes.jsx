
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";



  //  const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Main/>,
  //       Children: [
  //       {
  //           path: "/",
  //           element: <Home/>
  //       },
  //       {
  //         path: 'menu',
  //         element : <Menu/>
  //       },
  //       // {
  //       //   path: '/',
  //       //   element: <Menu></Menu>
  //       // }
        
  //     ]
  //   },
  // ]);
  // export default router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<Main/>}
        
      >
        <Route path="/" element={<Home/>}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path="order/:category" element={<Order/>}/>
        
      </Route>
    )
  );
  export default router