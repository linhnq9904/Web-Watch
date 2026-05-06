import { useCart } from "../context/CartContext";

function Checkout() {
    const { cart, clear } = useCart();

    const total = cart.reduce(
        (sum: any, p: any) => sum + p.price * p.qty,
        0
    );

    const handleOrder = () => {
        alert("Đặt hàng thành công!");
        clear(); // clear cart sau khi đặt
    };

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <div className="max-w-4xl mx-auto">

                <h2 className="text-2xl font-bold mb-4">🧾 Thanh toán</h2>

                {/* 🔥 Danh sách sản phẩm */}
                <div className="bg-white rounded shadow p-4">
                    {cart.length === 0 && (
                        <p className="text-gray-500 text-center">
                            Không có sản phẩm nào
                        </p>
                    )}

                    {cart.map((p: any) => (
                        <div
                            key={p.id}
                            className="flex justify-between items-center border-b py-3"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={p.image || "https://via.placeholder.com/60"}
                                    className="w-16 h-16 object-cover rounded"
                                />
                                <div>
                                    <p className="font-medium">{p.name}</p>
                                    <p className="text-sm text-gray-500">
                                        SL: {p.qty}
                                    </p>
                                </div>
                            </div>

                            <p className="text-orange-500 font-bold">
                                {(p.price * p.qty).toLocaleString()}₫
                            </p>
                        </div>
                    ))}
                </div>

                {/* 🔥 Tổng tiền */}
                {cart.length > 0 && (
                    <div className="bg-white rounded shadow p-4 mt-4 flex justify-between items-center">
                        <h3 className="text-lg font-bold">
                            Tổng thanh toán:{" "}
                            <span className="text-orange-500">
                                {total.toLocaleString()}₫
                            </span>
                        </h3>

                        <button
                            onClick={handleOrder}
                            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                        >
                            Đặt hàng
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Checkout;