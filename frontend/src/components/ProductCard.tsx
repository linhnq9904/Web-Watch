import { useCart } from "../context/CartContext";

function ProductCard({ product }: any) {
    const { addToCart } = useCart();

    return (
        <div className="card">
            <img src={product.image} />
            <h4>{product.name}</h4>
            <p>{product.price}₫</p>
            <button onClick={() => addToCart(product)}>Add</button>
        </div>
    );
}

export default ProductCard;