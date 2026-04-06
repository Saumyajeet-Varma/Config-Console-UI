import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const Register = () => {

    // const [dark, setDark] = useState(
    //     localStorage.getItem("theme") === "dark"
    // )

    // useEffect(() => {
    //     if (dark) {
    //         document.documentElement.classList.add("dark")
    //         localStorage.setItem("theme", "dark")
    //     } else {
    //         document.documentElement.classList.remove("dark")
    //         localStorage.setItem("theme", "light")
    //     }
    // }, [dark])

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black body-font">

            {/* Background blobs */}
            <div className="absolute -top-37.5 -left-37.5 w-100 h-100 bg-orange-500 opacity-30 rounded-full blur-3xl" />
            <div className="absolute -bottom-37.5 -right-37.5 w-100 h-100 bg-orange-400 opacity-20 rounded-full blur-3xl" />
            <div className="absolute top-[40%] left-[30%] w-75 h-75 bg-orange-300 opacity-20 rounded-full blur-3xl" />

            {/* Theme toggle */}
            {/* <button
                onClick={() => setDark(!dark)}
                className="absolute top-6 right-6 px-3 py-1 rounded-lg bg-orange-500 text-white text-sm z-10"
            >
                {dark ? "Light" : "Dark"}
            </button> */}

            {/* Glass card */}
            <div className="relative z-10 w-full max-w-md p-8 rounded-2xl backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 shadow-2xl">

                <h2 className="text-2xl font-semibold text-center mb-6 text-black dark:text-white">
                    Create Account
                </h2>

                <input
                    placeholder="Name"
                    className="w-full mb-3 px-4 py-2 rounded-lg bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                    placeholder="Email"
                    className="w-full mb-3 px-4 py-2 rounded-lg bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 px-4 py-2 rounded-lg bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />

                <button className="w-full py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium">
                    Register
                </button>

                {/* Register */}
                <p className="text-center text-sm mt-6 text-zinc-700 dark:text-zinc-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-orange-500 hover:underline cursor-pointer">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default Register