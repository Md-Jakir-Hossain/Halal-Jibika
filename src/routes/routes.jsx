import { createBrowserRouter } from "react-router-dom";
import Jobs from "../components/Jobs";
import Home from "../pages/Home/Home";
import App from "../App";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Signup from "../pages/Auth/Signup/Signup";
import NotFound from "../pages/NotFound/NotFound";
import Favorite from "../components/Favorite";
import Login from "../pages/Auth/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
