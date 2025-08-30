import { useState, useEffect } from "react"

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products/search?q=watch")
            .then((res) => res.json())
            .then((data) => setProducts(data.products))
            .catch((err) => console.log(err));
    }, [])
    return (
        <div className="product-page">
            <h2 className="section-title">Featured Luxury Watches</h2>
            <div className="products-grid">
                {products.map((p) => {
                    <div className="card" key={p.id}>
                        <img src={p.thumbnail} alt={p.title} />
                        <h3>{p.title}</h3>
                        <p className="price">${p.price}</p>
                        <button>Add to cart</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Products
