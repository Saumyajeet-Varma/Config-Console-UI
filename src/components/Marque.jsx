const Marque = ({ type, data }) => {
    return (
        <div className="w-full overflow-hidden py-6">
            <div className="flex w-max gap-8 animate-scroll">

                {type === "text" && [...data, ...data].map((text, i) => (
                    <CompanyItem key={i} name={text} />
                ))}

                {type === "logo" && [...data, ...data].map((logo, i) => (
                    <LogoItem key={i} src={logo} />
                ))}

            </div>
        </div>
    )
}

const CompanyItem = ({ name }) => {
    return (
        <div className="backdrop-blur-xl bg-white/30 dark:bg-white/5 border border-white/20 rounded-xl px-6 py-3 text-black dark:text-white font-medium shadow-lg">
            {name}
        </div>
    )
}

const LogoItem = ({ src }) => {
    return (
        <div className="
            backdrop-blur-xl 
            bg-white/30 
            dark:bg-white/5 
            border border-white/20
            rounded-2xl 
            px-8 py-4 
            shadow-xl
        ">
            <img
                src={src}
                alt="company"
                className="h-8 w-auto object-contain opacity-80 hover:opacity-100 transition"
            />
        </div>
    )
}


export default Marque