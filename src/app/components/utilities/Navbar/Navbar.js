import UserActionButton from "./UserActionButton"

const Navbar = () => {
    return(
        <div className="flex justify-between items-center w-full bg-color-accent">
            <a className="text-color-dark text-4xl p-4">ArkaisEdu</a>
            <div className="flex justify-end">
                <div className="text-color-dark text-xl px-4">Ekstensi</div>
                <UserActionButton/>
            </div>
        </div>
    )
}

export default Navbar