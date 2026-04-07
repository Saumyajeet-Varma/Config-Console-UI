import Marque from "../components/Marque";

const HomePage = () => {

    const data = ["Flipkart", "NALCO", "IIIT Bhubaneswar", "Vedic International School", "Guru Nanak Public School"]

    return (
        <main className="flex-1 flex items-center justify-center p-6">

            <div className="max-w-5xl w-full">

                {/* Hero Glass Card */}
                <div className="backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 rounded-3xl p-10 shadow-2xl">

                    {/* Hero Content */}
                    <div className="text-center">

                        <h1 className="text-4xl md:text-5xl font-semibold text-black dark:text-white mb-4">
                            Welcome to SV Console
                            <span className="block text-orange-500 text-4xl">
                                This is My Console
                            </span>
                        </h1>

                        <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-8">
                            This is my console, I can do whatever the fuck I want :)
                        </p>

                        {/* CTA buttons */}
                        <div className="flex gap-4 justify-center">

                            <button className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-medium transition">
                                Login
                            </button>

                            <button className="px-6 py-3 rounded-xl backdrop-blur-xl bg-white/40 dark:bg-white/5 border border-white/20 text-black dark:text-white hover:bg-white/60 dark:hover:bg-white/10 transition">
                                View Docs
                            </button>

                        </div>

                    </div>

                </div>

                {/* Optional secondary glass section */}
                <div className="grid md:grid-cols-3 gap-6 mt-6">

                    <HeroFeature
                        title="Card 01"
                        desc="Isme kuch likhuga"
                    />

                    <HeroFeature
                        title="Card 02"
                        desc="Isme v kuch likhuga"
                    />

                    <HeroFeature
                        title="Card 03"
                        desc="Isme v kuch likhuga"
                    />

                </div>

                <Marque type="text" data={data} />

            </div>

        </main>
    );
};

const HeroFeature = ({ title, desc }) => {
    return (
        <div className="backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 rounded-2xl p-6 shadow-xl">
            <h3 className="font-semibold text-black dark:text-white mb-2">
                {title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {desc}
            </p>
        </div>
    );
};

export default HomePage;