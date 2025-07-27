import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Main/Home";
import ErrorPage from "../Pages/Error/Error_Page";
import AuthLayout from "../Layouts/AUTH";
import NotFound from "../Pages/Error/Not_Found";
import About from "../Pages/Main/About";
const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Navigate to="/auth/login" replace />,
        },
        // {
        //   path: "login",
        //   element: <Login />,
        // },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
