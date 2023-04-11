import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
    const { data: session } = useSession();

    const handleSignin = (e) => {
        e.preventDefault()
        signIn()
    }
    const handleSignout = (e) => {
        e.preventDefault()
        signOut()
    }

    return (
        <div className='my-6'>
            <Link href='/' className='px-8'>
                Home
            </Link>

            {session && <a href="#" onClick={handleSignout} className="bg-blue-700 text-white hover:bg-blue-800 py-3 px-8 rounded-md">Sign out</a>  }
            {!session && <a href="#" onClick={handleSignin}  className="bg-blue-700 text-white hover:bg-blue-800 py-3 px-8 rounded-md">Sign in</a>  }
        </div>
    )
}