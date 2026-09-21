
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Movie from './pages/Movie';




const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />
      },
       {
        path: 'movie',
        element: <Movie />
      }

    ]
  },

]);

function Router() {


  return (
    <RouterProvider router={router} />
  )
}

export default Router

