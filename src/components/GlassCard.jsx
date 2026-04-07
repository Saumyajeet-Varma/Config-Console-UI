const GlassCard = ({ title, value }) => {

    return (
        <div className="backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 rounded-2xl p-6 shadow-xl">
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">{title}</p>
            <h3 className="text-2xl font-semibold text-black dark:text-white mt-2">
                {value}
            </h3>
        </div>
    );
}

export default GlassCard