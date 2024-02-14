import { createBrowserRouter } from "react-router-dom";
import Home from './../Pages/Home';
import About from './../Pages/About';
import Blog from './../Pages/Blog';
import Contacts from './../Pages/Contacts';
import FAQ from './../Pages/FAQ';
import Feedback from './../Pages/Feedback';
import News from './../Pages/News';
import Portfolio from './../Pages/Portfolio';
import Services from './../Pages/Services';
import Profiles from "../Pages/Profiles";
import NotFound from './../Pages/NotFound';
import Products from './../Pages/Products';
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path:"/",
                element: <Home />,
            },
            {
                path:"/home",
                element: <Home />,
            },
            {
                path:"/About",
                element: <About/>,
            },
            {
                path:"/Blog",
                element: <Blog/>,
            },
            {
                path:"/Contacts",
                element: <Contacts/>,
            },
            {
                path:"/FAQ",
                element: <FAQ/>,
            },
            {
                path:"/Feedback",
                element: <Feedback/>,
            },
            {
                path:"/News",
                element: <News/>,
            },
            {
                path:"/Portfolio",
                element: <Portfolio/>,
            },
            {
                path:"/Products",
                element: <Products/>,
            },
            {
                path:"/Services",
                element: <Services/>,
            },
            {
                path:"/profile",
                element: <Profiles/>,
            },
            
            // 404 not found page
            {
                path:"*",
                element: <NotFound />,
            },
        ],
 
    },
    
])