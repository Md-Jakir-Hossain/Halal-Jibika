import { createBrowserRouter } from "react-router-dom";
import Jobs from "../pages/Jobs/Jobs";
import Home from "../pages/Home/Home";
import App from "../App";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Signup from "../pages/Auth/Signup/Signup";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Auth/Login/Login";
import Details from "../components/Details/Details";
import UpdateJob from "../components/UpdateJob/UpdateJob";
import AddJobs from "../pages/AddJobs/AddJobs";
import {
  delteRequest,
  getRequest,
  postRequest,
  updateRequest,
} from "./routes-actions";
import Favorite from "../components/Favorite/Favorite";
import PrivateRoutes from "./PrivateRoute";
import Applied from "../pages/Applied/Applied";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    id: "root",
    loader: getRequest,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: (
          <PrivateRoutes>
            <Jobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "/addjobs",
        action: postRequest,
        element: (
          <PrivateRoutes>
            <AddJobs />
          </PrivateRoutes>
        ),
      },
      {
        path: "/details/:id",
        action: delteRequest,
        element: <Details />,
      },
      {
        path: "/update/:updateId",
        action: updateRequest,
        element: (
          <PrivateRoutes>
            <UpdateJob />
          </PrivateRoutes>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/applied",
        element: (
          <PrivateRoutes>
            <Applied />
          </PrivateRoutes>
        ),
      },
      {
        path: "/favorite",
        element: (
          <PrivateRoutes>
            <Favorite />
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default routes;
