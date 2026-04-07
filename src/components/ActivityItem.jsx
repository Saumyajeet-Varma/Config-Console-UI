const ActivityItem = ({ text }) => {

    return (
        <div className="px-4 py-3 rounded-lg bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white">
            {text}
        </div>
    );
}

export default ActivityItem