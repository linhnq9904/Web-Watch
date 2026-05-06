import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

function Header() {
    const { cart } = useCart();
    const { user, logout } = useAuth();
    const [q, setQ] = useState("");
    const nav = useNavigate();

    const handleSearch = () => {
        if (!q.trim()) return;
        nav(`/?q=${q}`);
    };

    return (
        <div className="bg-gradient-to-r from-orange-500 to-orange-400 text-white sticky top-0 z-50 shadow">

            <div className="max-w-6xl mx-auto flex items-center gap-3 p-3">

                {/* 🔥 Logo */}
                <Link to="/" className="text-2xl font-bold tracking-wide">
                    Shopee
                </Link>

                {/* 🔥 Search */}
                <div className="flex flex-1 bg-white rounded overflow-hidden">
                    <input
                        className="flex-1 p-2 text-black outline-none"
                        placeholder="Tìm sản phẩm..."
                        onChange={(e) => setQ(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />

                    <button
                        onClick={handleSearch}
                        className="bg-orange-500 px-4 hover:bg-orange-600 transition"
                    >
                        🔍
                    </button>
                </div>

                {/* 🔥 Cart */}
                <Link to="/cart" className="relative text-2xl hover:scale-110 transition">
                    🛒
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-white text-orange-500 text-xs px-1 rounded-full">
                            {cart.length}
                        </span>
                    )}
                </Link>

                {/* 🔥 User */}
                {user ? (
                    <div className="flex items-center gap-2">
                        <span className="text-sm">👤 {user.name}</span>
                        <button
                            onClick={logout}
                            className="bg-black px-3 py-1 rounded text-sm hover:bg-gray-800"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="bg-white text-orange-500 px-3 py-1 rounded hover:bg-gray-100"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;