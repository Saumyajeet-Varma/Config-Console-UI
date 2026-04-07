const Navbar = ({ activeTab }) => {

    return (
        <header className="backdrop-blur-xl bg-white/30 dark:bg-white/5 border-b border-white/20 px-6 py-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-black dark:text-white">
                {activeTab}
            </h2>

            <div className="flex items-center gap-3">
                <input
                    placeholder="Search..."
                    className="px-3 py-1.5 rounded-lg bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white focus:outline-none"
                />

                <div className="w-9 h-9 rounded-full bg-orange-500" />
            </div>
        </header>
    );
}

export default Navbar