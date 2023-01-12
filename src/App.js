import { BrowserRouter as Router , Routes , Route , Outlet, createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Products from "./Pages/Products/Products";
import Footer from "./Components/Footer/Footer";
import "./App.scss"

const Layout = () => {
  return (
    <div className="app">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router =createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/product/:id",
        element:<Product/>
      },
      {
        path:"/products/:id",
        element:<Products/>
      },
    ]
  }
])



function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App;
