import "../css/navbar.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <div className="nav">
            <h2 className="title">WatchShop</h2>
            <nav className="navbar">
                <ul className="flex ">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Products">Product</Link>
                    </li>
                    <li>
                        <Link to="/Cart">🛒 Cart</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
