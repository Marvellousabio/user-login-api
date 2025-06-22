import Link from 'next/link';
import LogoutForm from './logoutform';
import { getSession } from "@/action";

const navbar = async () => {
  const session = await getSession();

  return (
    <nav>
      <Link href="/">Homepage</Link>
      <Link href="/premium">Premium</Link>
      <Link href="/profile">Profile</Link>

      {!session.isLoggedIn ? (
        <Link href="/login">Login</Link>
      ) : (
        <LogoutForm />
      )}
    </nav>
  );
};

export default navbar;
