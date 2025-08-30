import "../css/Home.css"

const Home = () => {
  return (
    <div>
      <div className="nav">
        <h2 className="title">WatchShop</h2>
        <nav className="navbar">
          <ul >
            <a href="/">Home</a>
            <a href="/Products">Product</a>
            <a href="/Cart">🛒 Cart</a>
            <a href="#Contact">Contact Us</a>
          </ul>
        </nav>
      </div>
      <section className="Hero">
        <div className="hero-text">
          <h2>Discover Premium Wrist Watches</h2>
          <p>Elevate your style with our exclusive collection</p>
          <button>Shop Now</button>
        </div>
        <img
          src="https://imgs.search.brave.com/Wt4rT_vNS8to3U58AXkLdbLTw2IBEPn8e94QWmogmKE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTA2/NTMyOTA1OC9waG90/by9wcmVtaXVtLW1l/bnMtd2F0Y2gtb24t/aGFuZC1jbG9zZS11/cC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VmRwVWFjOE9i/ckRaWjBJOE9DRF92/T3hQcXlPVUNhM2NN/OHpvcVhzUGt1RT0"
          alt="Watch"
          className="hero-image"
        />
      </section>
      <section className="features">
        <div className="feat-card">
          <h3>Free Shipping</h3>
          <p>On all orders over $100</p>
        </div>
        <div className="feat-card">
          <h3>Secure Payments</h3>
          <p>100% secure payment</p>
        </div>
        <div className="feat-card">
          <h3>24/7 Support</h3>
          <p>We’re here to help you anytime</p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} WatchStore — All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
