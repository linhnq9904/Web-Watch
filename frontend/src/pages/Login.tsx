import { useState } from "react";
import { loginAPI } from "../services/authService";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    const nav = useNavigate();

    const handle = async () => {
        try {
            const res = await loginAPI({ email, password });
            login(res);
            nav("/");
        } catch (err) {
            alert("Sai email hoặc mật khẩu!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-orange-100">

            <div className="bg-white p-8 rounded shadow w-80">

                <h2 className="text-2xl font-bold text-center mb-5 text-orange-500">
                    Đăng nhập
                </h2>

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
                    Đăng nhập
                </button>

                <p className="text-center mt-4 text-sm">
                    Chưa có tài khoản?{" "}
                    <Link to="/register" className="text-orange-500 hover:underline">
                        Đăng ký
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Login;