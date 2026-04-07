import { Link } from "react-router-dom"

const LoginPage = () => {

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black body-font">

            {/* Background blobs */}
            <div className="absolute -top-37.5 -left-37.5 w-100 h-100 bg-orange-500 opacity-30 rounded-full blur-3xl" />
            <div className="absolute -bottom-37.5 -right-37.5 w-100 h-100 bg-orange-400 opacity-20 rounded-full blur-3xl" />
            <div className="absolute top-[40%] left-[30%] w-75 h-75 bg-orange-300 opacity-20 rounded-full blur-3xl" />

            <div className="relative z-10 w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 shadow-2xl">

                <h2 className="text-2xl font-semibold text-center mb-6 text-black dark:text-white">
                    Welcome Back
                </h2>

                <input
                    placeholder="Email"
                    className="w-full mb-3 px-4 py-2 rounded-lg bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-2 px-4 py-2 rounded-lg bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                {/* Forgot password */}
                <div className="text-right mb-5">
                    <button className="text-sm text-orange-500 hover:underline">
                        Forgot Password?
                    </button>
                </div>

                <button className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition">
                    Login
                </button>

                {/* Register */}
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