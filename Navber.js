import React from "react";
import {Link} from 'react-router-dom';
const Navber=()=>{
  return (
    <div>
      <ul>
        <Link to="/"><li>Home </li></Link>
        <Link to="/about"><li>About</li></Link>
       
      </ul>
    </div>)
}
export default Navber

// Router
// It allows you to manage navigation in your app by defining routes that connect the URL paths to specific components.
// With React Router, you can implement different views for different parts of your application without the need for a full-page refresh

// React Router is a library for handling routing and navigation in React JS Applications. It allows you to create dynamic routes, providing a seamless user experience by mapping various URLs to components. 
// It enables navigation in a single-page application (SPA) without refreshing the entire page.

// BrowserRouter: Uses the HTML5 history API to keep your UI in sync with the URL.

// Routes: A container for all your route definitions.

// Route: Defines a single route with a path and the component to render.

// Link: Creates navigational links in your application.