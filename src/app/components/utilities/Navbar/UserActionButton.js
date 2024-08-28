import React from "react";
import Link from "next/link";
import { authUserSession } from "@/app/lib/auth-libs";
import Result from "../../main/Result"

const UserActionButton = async () => {
  const user = await authUserSession();  // Mendapatkan data user
  const actionLabel = user ? "sign out" : "sign in";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? (
        <Link href="/users/collection" className="py-1 hover:text-opacity-75">
          Collection
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-accent py-1 px-10 inline-block hover:text-opacity-75"
      >
        {actionLabel}
      </Link>
      <Result user={user} />
    </div>
  );
};

export default UserActionButton;
