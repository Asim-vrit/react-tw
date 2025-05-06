import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Users from "./pages/Admin/Users/Users";
import Products from "./pages/Admin/Products/Products";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/login", element: <Login /> },
  {
    path: "/admin",
    Component: AdminLayout,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "products", element: <Products /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
