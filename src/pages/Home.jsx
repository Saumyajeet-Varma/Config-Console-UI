import ActivityItem from "../components/ActivityItem";
import GlassCard from "../components/GlassCard";

export default function HomePage() {

    return (
        <main className="flex-1 p-6 overflow-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                <GlassCard title="Total Docs" value="12" />
                <GlassCard title="You have access" value="8" />
            </div>

            <div className="mt-6">
                <div className="backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 rounded-2xl p-6 shadow-xl">
                    <h3 className="text-lg font-semibold text-black dark:text-white mb-4">
                        Recent Activity
                    </h3>

                    <div className="space-y-3">
                        <ActivityItem text="Doc 01" />
                        <ActivityItem text="Doc 02" />
                        <ActivityItem text="Doc 03" />
                    </div>
                </div>
            </div>
        </main>
    );
}


