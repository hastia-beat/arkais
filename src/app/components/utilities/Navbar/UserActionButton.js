import Link from "next/link";
import { authUserSession } from "@/app/lib/auth-libs"



const UserActionButton = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "sign out" : "sign in";
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

     return(
        <div>
            <Link href={actionURL} className="text-color-dark text-xl px-4">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton;

