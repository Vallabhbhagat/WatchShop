import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Carts from "./pages/Carts";  
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<Products />}/>
        <Route path="/Cart"  element={<Carts />}/>
      </Routes>
    </>
  )
}

export default App
