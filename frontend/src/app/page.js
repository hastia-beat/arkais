// src/app/page.js

import { authUserSession } from "@/app/lib/auth-libs";
import ClientComponent from './components/Clientcomponent';

export default async function Home() {
  const user = await authUserSession();  // Mengambil data user dari server-side

  return (
    <ClientComponent user={user} />
  );
}
