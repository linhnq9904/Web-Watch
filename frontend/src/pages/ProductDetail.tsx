import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProduct } from "../services/productService";
import { useCart } from "../context/CartContext";

function ProductDetail() {
    const { id } = useParams();
    const [p, setP] = useState<any>(null);
    const { addToCart } = useCart();

    useEffect(() => {
        if (id) getProduct(id).then(setP);
    }, [id]);

    if (!p)
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500">Loading...</p>
            </div>
        );

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <div className="max-w-5xl mx-auto bg-white p-5 rounded shadow flex flex-col md:flex-row gap-6">

                {/* 🔥 Image */}
                <div className="flex-1">
                    <img
                        src={p.image || "https://via.placeholder.com/400"}
                        className="w-full h-80 object-cover rounded"
                    />
                </div>

                {/* 🔥 Info */}
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-2">{p.name}</h2>

                    <p className="text-2xl text-orange-500 font-bold mb-4">
                        {p.price.toLocaleString()}₫
                    </p>

                    <p className="text-gray-600 mb-4">
                        Sản phẩm chất lượng cao, thiết kế đẹp và bền bỉ.
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mb-4">
                        <span>Số lượng:</span>
                        <input
                            type="number"
                            defaultValue={1}
                            min={1}
                            className="w-16 border p-1"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <button
                            onClick={() => addToCart(p)}
                            className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600"
                        >
                            Thêm vào giỏ
                        </button>

                        <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded">
                            Mua ngay
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;