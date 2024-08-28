import UserActionButton from "./UserActionButton";
import Link from "next/link";

const Navbar = () => {
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link href="/" className="text-2xl py-1 px-4">ArkaisEdu</Link>
                <UserActionButton />
            </div>
        </header>
    );
};

export default Navbar;
