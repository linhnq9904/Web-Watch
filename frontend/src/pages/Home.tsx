import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { Link, useSearchParams } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState<any[]>([]);
    const [params] = useSearchParams();

    const q = params.get("q");

    useEffect(() => {
        getProducts().then((data) => {
            if (q) {
                setProducts(
                    data.filter((p: any) =>
                        p.name.toLowerCase().includes(q.toLowerCase())
                    )
                );
            } else {
                setProducts(data);
            }
        });
    }, [q]);

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header />

            {/* 🔥 Banner */}
            <div className="max-w-6xl mx-auto mt-3">
                <img
                    src="https://picsum.photos/1200/300"
                    className="w-full h-64 object-cover rounded"
                />
            </div>

            {/* 🔥 Category */}
            <div className="max-w-6xl mx-auto mt-3 bg-white rounded p-4 grid grid-cols-5 text-center text-sm font-medium">
                <div className="hover:text-orange-500 cursor-pointer">Thời trang</div>
                <div className="hover:text-orange-500 cursor-pointer">Điện thoại</div>
                <div className="hover:text-orange-500 cursor-pointer">Đồng hồ</div>
                <div className="hover:text-orange-500 cursor-pointer">Laptop</div>
                <div className="hover:text-orange-500 cursor-pointer">Phụ kiện</div>
            </div>

            {/* 🔥 Product list */}
            <div className="max-w-6xl mx-auto mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-2">
                {products.map((p) => (
                    <Link
                        to={`/product/${p.id}`}
                        key={p.id}
                        className="bg-white rounded shadow hover:shadow-lg transition p-2"
                    >
                        <img
                            src={p.image || "https://via.placeholder.com/200"}
                            className="w-full h-40 object-cover rounded"
                        />

                        <h4 className="text-sm mt-2 line-clamp-2">{p.name}</h4>

                        <p className="text-orange-500 font-bold mt-1">
                            {p.price}₫
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;