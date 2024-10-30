import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
// import {
//   RouterProvider,
// } from "react-router-dom";
// import { router } from './routes/Routes' ;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-screen-lg mx-auto">
        {/* <RouterProvider router={router} /> */}
        <App />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
