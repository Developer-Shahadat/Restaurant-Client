import { Children } from "react";
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";

   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
        Children: [
        {
            path: '/',
            element: <Home></Home>,
        }
      ]
    },
  ]);