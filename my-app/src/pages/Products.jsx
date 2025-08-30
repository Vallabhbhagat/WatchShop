import { useState, useEffect } from "react";
import "../css/Products.css";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const url =
                "https://watch-database1.p.rapidapi.com/watches/make/137/page/1/limit/20";
            const options = {
                method: "GET",
                headers: {
                    "x-rapidapi-key": "1a5be941f1msh0555a6764b2d8a6p169aaajsn7b7f0e77e811",
                    "x-rapidapi-host": "watch-database1.p.rapidapi.com",
                },
            };

            try {
                const response = await fetch(url, options);

                if (!response.ok) {
                    throw new Error("Network response was not ok " + response.statusText);
                }

                const result = await response.json();
                // console.log("API Result:", result);

                // set products correctly
                setProducts(result.watches || result);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="product-page">
            <h2 className="section-title text-3xl font-bold font-sans">
                Featured Luxury Watches
            </h2>
            <div className="products">
                {products.length > 0 ? (
                    products.map((p) => (
                        <li key={p.watchId}>
                            <div className="card">
                                <img src={p.url} alt={p.movementName} />
                                <h3>{p.movementName}</h3>
                                <p className="price">€{p.priceInEuro}</p>
                                <button>Add to cart</button>
                            </div>
                        </li>
                    ))
                ) : (
                    <p>Loading watches...</p>
                )}
            </div>
        </div>
    );
};

export default Products; 
