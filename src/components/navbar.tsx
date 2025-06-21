import Link from 'next/link';
import logoutform from './logoutform';

const navbar = () => {
  return (
    <nav>
        <Link href="/">Homepage</Link>
        <Link href="/premium">Premium</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/login">Login</Link>
        <logoutform />
    </nav>
  )
}

export default navbar