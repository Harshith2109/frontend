import Layout from "./layout.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
  
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout/>}>

    <Route path="/" element={<Hero/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>

  </Route>

));
root.render(
  <React.StrictMode>
    
    
     
     {/* <NavBar /> */}
     <RouterProvider router={router} />
     {/* <Footer /> */}

 
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
