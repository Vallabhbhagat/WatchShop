import { useState, useEffect } from "react";
import { useCart } from "../component/CartContext";
import "../css/Products.css";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/product.json")
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((err) => console.log(err));
    }, []);

    const { addToCart } = useCart();

    return (
        <div className="product-page">
            <h2 className="section-title text-4xl font-bold font-serif shadow-amber-200">
                Featured Luxury Watches
            </h2>
            <div className="products">
                {products.length > 0 ? (
                    products.map((p) => (
                        <li key={p.id}>
                            <div className="card">
                                <img src={p.thumbnail} alt={p.title} />
                                <h3>{p.title}</h3>
                                {p.price ? (<p className="price">${p.price}</p>) : (<p className="price">$10000</p>)}
                                <button className="btn" onClick={() => {
                                    addToCart(p)
                                }}>Add to cart</button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p className="text-cyan-100">Loading watches...</p>
                )}
            </div>
        </div>
    );
};

export default Products; 
