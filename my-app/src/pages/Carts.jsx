import { useCart } from "../component/CartContext";

const Carts = () => {
    const { cart, removeFromCart } = useCart();
    console.log(cart);

    if (!cart || cart.length === 0) {
        return (
            <div className="p-4">
                <h1 className="text-xl font-bold mb-4 text-center text-amber-400">Your Cart</h1>
                <p className="text-center text-6xl text-amber-300">No items in cart</p>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4 text-center text-amber-400">Your Cart</h1>
            {cart.map((p, index) => {
                const key = p.id ? `cart-${p.id}` : `cart-${index}`;
                const price = typeof p.price === "number" ? p.price.toFixed(2) : p.price;

                return (
                    <div
                        key={key}
                        className="flex justify-between items-center border-b py-2"
                    >
                        <span className="m-2.5 text-2xl text-blue-100">{p.title || "Untitled Product"}</span>
                        <span className="text-2xl text-blue-100">${price}</span>
                        <button
                            onClick={() => removeFromCart(p.id)}
                            className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                            Remove
                        </button>
                    </div>
                );
            })}
            <span className="text-2xl text-blue-100">Total price: ${cart.reduce((total, item) => total + (item.price || 0), 0).toFixed(2)}</span>
            <p className="text-2xl text-blue-100 m-5">Total items: {cart.length}</p>
        </div>
    );
};

export default Carts;
