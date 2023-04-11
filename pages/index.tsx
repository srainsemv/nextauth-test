import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'

export default function Home() {
    const { data: session, status } = useSession()
    const loading = status === "loading"

    async function HandleSubmit(event: any) {
        event.preventDefault();

        (await fetch("/api/auth/cryptPassword", {
            method: "POST",
            body: JSON.stringify({password: event.target.password.value}),
        })).json().then((data) => {
            console.log(data.password)
        });
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Next Auth Example</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className={styles.main}>
                <div>
                    {loading && <div className={styles.title}>Loading...</div>}
                    {
                        session &&
                        <>
                            <p className="my-1">Welcome, {session.user.name}</p>
                            <p className="">{session.user.email}</p>
                            <img src={session.user.image} alt="User Avatar" className="h-10 w-10 my-4" />
                            <p className="">Session expires on {session.expires}</p>
                        </>
                    }
                    {
                        !session &&
                        <>
                            <p className="text-2xl">Please Sign in</p>

                            <form onSubmit={HandleSubmit}>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm bg-gray-100 my-4 p-2 ring-1 ring-black"
                                    placeholder="Password"
                                />

                                <button className="bg-blue-600 text-white hover:bg-blue-700 py-2 px-6 rounded-md w-full">
                                    Submit
                                </button>
                            </form>
                        </>
                    }
                </div>
            </main>
        </div>
    )
}