import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createRoot } from "react-dom/client";
import Home from "../src/pages/Home"
import DetailPage from "../src/pages/DetailPage"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Challenge from "../src/pages/Challenge"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Challenge",
        element:<Challenge/>
      },
      {
        path:"/DetailPage/:id",
        element:<DetailPage/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
