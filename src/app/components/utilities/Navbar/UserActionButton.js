import Link from "next/link";
import { authUserSession } from "@/app/lib/auth-libs"

const UserActionButton = async() => {
    const user = await authUserSession();
    const actionLabel = user ? "sign out" : "sign in";
    const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

     return(
        <div className="flex justify-beetwen gap-2">
            {
                user ?  <Link href="/users/dashboard" className="py-1">Dashboard</Link> : null 
            }
            <Link href={actionURL} className="bg-color-dark text-color-accent py-1 px-10 inline-block">{actionLabel}</Link>
        </div>
    )
}

export default UserActionButton;

