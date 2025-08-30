import "../css/navbar.css"

const Navbar = () => {
    return (
        <div className="nav">
            <h2 className="title">WatchShop</h2>
            <nav className="navbar">
                <ul >
                    <a href="/">Home</a>
                    <a href="/Products">Product</a>
                    <a href="/Cart">🛒 Cart</a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
