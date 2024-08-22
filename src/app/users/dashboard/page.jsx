import { authUserSession } from "@/app/lib/auth-libs";
import { Iceberg } from "next/font/google";
import Image from "next/image";
import Link from "next/link";


const page = async() => {
    const user = await authUserSession();

    return (
        <div className="mt-8 text-color-primary flex flex-col items-center min-h-[70vh]">
            <h5 className="text-2xl font-bold py-2">Welcome, {user?.name}</h5>
            <Image src={user?.image} alt={user?.name} width={250} height={250}/>
            <div className="py-8">
                <Link
                    href="/users/dashboard/collection"
                    className="bg-color-accent text-color-dark px-4 py-3 rounded-md font-bold"
                >Bookmark</Link>
            </div>
        </div>
    )
}

export default page;