import React from "react";
import Link from "next/link";
import { authUserSession } from "@/app/lib/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "sign out" : "sign in";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-3">
      <Link
        href="https://chromewebstore.google.com/detail/aoegcgghcghdccfmommhfpipmcfpadpb?hl=id"
        className="py-1 px-1 hover:text-opacity-75"
        target="_blank"
      >
        Extension
      </Link>
      {user ? (
        <Link href="/users/collection" className="py-1 px-1 hover:text-opacity-75">
          Collection
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="bg-color-dark text-color-accent py-1 px-10 inline-block hover:text-opacity-75"
      >
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionButton;
