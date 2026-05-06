import { useState } from "react";
import { registerAPI } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();

    const handle = async () => {
        try {
            await registerAPI({ name, email, password });
            alert("Đăng ký thành công!");
            nav("/login");
        } catch (err) {
            alert("Đăng ký thất bại!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-100">

            <div className="bg-white p-8 rounded shadow w-80">

                <h2 className="text-2xl font-bold text-center mb-5 text-orange-500">
                    Đăng ký
                </h2>

                <input
                    placeholder="Tên"
                    className="w-full p-2 border mb-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-2 border mb-3 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="w-full p-2 border mb-4 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    onClick={handle}
                    className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                >
                    Đăng ký
                </button>

                <p className="text-center mt-4 text-sm">
                    Đã có tài khoản?{" "}
                    <Link to="/login" className="text-orange-500 hover:underline">
                        Đăng nhập
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Register;