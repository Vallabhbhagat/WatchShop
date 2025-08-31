import Navbar from "./component/Navbar"
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Products" element={<Products />}/>
      </Routes>
      
      
    </>
  )
}

export default App
