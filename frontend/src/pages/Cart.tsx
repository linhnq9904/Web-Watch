import { useCart } from "../context/CartContext";

function Cart() {
    const { cart, remove, updateQty } = useCart();

    const total = cart.reduce(
        (sum: any, p: any) => sum + p.price * p.qty,
        0
    );

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-2xl font-bold mb-4">🛒 Giỏ hàng</h2>

                {cart.length === 0 && (
                    <p className="text-center text-gray-500">Giỏ hàng trống</p>
                )}

                {cart.map((p: any) => (
                    <div
                        key={p.id}
                        className="flex items-center justify-between bg-white p-4 mb-3 rounded shadow"
                    >
                        {/* info */}
                        <div className="flex items-center gap-4">
                            <img
                                src={p.image || "https://via.placeholder.com/80"}
                                className="w-20 h-20 object-cover rounded"
                            />

                            <div>
                                <h4 className="font-medium">{p.name}</h4>
                                <p className="text-orange-500 font-bold">
                                    {p.price}₫
                                </p>
                            </div>
                        </div>

                        {/* qty */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => updateQty(p.id, p.qty - 1)}
                                className="px-2 bg-gray-200"
                            >
                                -
                            </button>

                            <span>{p.qty}</span>

                            <button
                                onClick={() => updateQty(p.id, p.qty + 1)}
                                className="px-2 bg-gray-200"
                            >
                                +
                            </button>
                        </div>

                        {/* remove */}
                        <button
                            onClick={() => remove(p.id)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Xóa
                        </button>
                    </div>
                ))}

                {/* total */}
                {cart.length > 0 && (
                    <div className="bg-white p-4 mt-5 rounded shadow flex justify-between items-center">
                        <h3 className="text-lg font-bold">
                            Tổng:{" "}
                            <span className="text-orange-500">
                                {total.toLocaleString()}₫
                            </span>
                        </h3>

                        <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600">
                            Thanh toán
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;