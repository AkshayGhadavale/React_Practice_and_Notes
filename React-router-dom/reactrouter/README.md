# Craeate react-router-Navbar

Navlink and Link use in router insted of a tag beacuse a tag refresh the page

 Link Component Props:

* to: String or object that specifies the pathname.
* replace: Replaces the pathname in the history stack with new.
* innerRef: Passes ref to the element rendered by the component.

NavLink Component Props:

* to, replace, innerRef same as the Link Component.
* className: Specifies the CSS class name you want to apply to the element when active.
* isActive: Returns boolean value whether the link is active or not.
* style: To apply inline CSS.
* end: Match the pathname precisely with the URL.

first you have to create Header with Link and NavLink What ever you want

like this

```
import { NavLink } from 'react-router-dom'



<NavLink 
to="/" 
className={({isActive}) =>
`block py-2 pr-4 pl-3 duration-200
 ${isActive ? "text-blue-400":"text-gray-400"}
 border-b border-gray-100 hover:bg-gray-50
 lg:hover:bg-transparent
 lg:border-0 hover:text-white
 lg:p-0`
 } aria-current="page">
            Home
 </NavLink>


 <li>
<NavLink to="/Company" 
className={({isActive}) =>
 `block py-2 pr-4 pl-3 duration-200 
 ${isActive ? "text-blue-400":"text-gray-400"}
 border-b border-gray-100 hover:bg-gray-50 
 lg:hover:bg-transparent 
 lg:border-0 hover:text-white
 lg:p-0`
 }>Company
 </NavLink>
  </li>
```

Then create pages like home ,Company.etc

create file layou.jsx in src or use app.jsx

```
import React from "react";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
```

get Outlet from react-routerdom

then go to main.jsx 


then first get router provider and  add under root render and change app,jsx to layout if you use app.jsx then use app and in router provider pass router 

```
<RouterProvider router={router}>
      <Layout />
    </RouterProvider>
```

then we create router we use createBrowserRouter and under use array  then path layout is outer body create there chidldren 

```

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "/", element: <Home /> },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
    ],
  },
]);

```

belllow is main.jsx


```
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "../src/Home/Home.jsx";
import Company from "../src/Pages/Company.jsx";
import Marketplace from "../src/Pages/Marketplace.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "/", element: <Home /> },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/marketplace",
        element: <Marketplace />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);

```
