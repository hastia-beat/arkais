import { authUserSession } from "@/app/lib/auth-libs";
import Image from "next/image";

const page = async() => {
    const user = await authUserSession();

    return (
        <div className="text-color-primary">
            <h3>DASHBOARD</h3>
            <h5>Welcome, {user.name}</h5>
            <Image src={user.image} alt={user.name} width={250} height={250}/>
        </div>
    )
}

export default page;