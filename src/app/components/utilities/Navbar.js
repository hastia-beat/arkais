const Navbar = () => {
    return(
        <div className="flex justify-between items-center w-full bg-color-accent">
            <div className="text-color-dark text-4xl p-4">ArkaisEdu</div>
            <div className="flex justify-end">
                <div className="text-color-dark text-xl px-4">Ekstensi</div>
                <div className="text-color-dark text-xl px-4">Log in</div>
            </div>
        </div>
    )
}

export default Navbar