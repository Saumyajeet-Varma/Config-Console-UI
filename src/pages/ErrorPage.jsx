import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden font-montserrat">

            {/* Background blobs */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500 opacity-30 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-400 opacity-20 rounded-full blur-3xl" />
            <div className="absolute top-[40%] left-[30%] w-72 h-72 bg-orange-300 opacity-20 rounded-full blur-3xl" />

            <div className="relative z-10 w-full max-w-4xl p-6">

                <div className="
                    backdrop-blur-xl 
                    bg-white/30 
                    dark:bg-white/5 
                    border border-white/20 
                    rounded-3xl 
                    p-12 
                    shadow-2xl
                    text-center
                ">

                    <h1 className="text-7xl font-bold text-orange-500 mb-4">
                        404
                    </h1>

                    <h2 className="text-2xl font-semibold text-black dark:text-white mb-3">
                        Page Not Found
                    </h2>

                    <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                        This route doesn't exist in this console.
                    </p>

                    <div className="flex gap-4 justify-center">
                        <Link
                            to="/"
                            className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium transition"
                        >
                            Go Home
                        </Link>

                        <button
                            onClick={() => window.history.back()}
                            className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white hover:bg-white/60 dark:hover:bg-white/10 transition"
                        >
                            Go Back
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ErrorPage