import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "../config/axios"
import toast from "react-hot-toast"

const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleLogin = async () => {

        try {
            setLoading(true)

            const params = {
                email,
                password
            }

            const res = await axios.post("/auth/login", params)

            localStorage.setItem("accessToken", res.data.accessToken)
            localStorage.setItem("refreshToken", res.data.refreshToken)
            localStorage.setItem("user", JSON.stringify(res.data.user))

            navigate("/dashboard")

            toast.success(res.data.message)

        }
        catch (err) {
            toast.error(err.response?.data?.message || "Login failed")
            console.error(err)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black body-font">

            <div className="relative z-10 w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 shadow-2xl">

                <h2 className="text-2xl font-semibold text-center mb-6 text-black dark:text-white">
                    Welcome Back
                </h2>

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full mb-3 px-4 py-2 rounded-lg bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full mb-2 px-4 py-2 rounded-lg bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <button
                    onClick={handleLogin}
                    disabled={loading}
                    className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-center text-sm mt-6 text-zinc-700 dark:text-zinc-400">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-orange-500 hover:underline cursor-pointer">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default LoginPage