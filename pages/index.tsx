import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { useSession } from 'next-auth/react'

export default function Home() {
    const { data: session, status } = useSession()
    const loading = status === "loading"

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
                        session && session.user ? (
                            <>
                                <p className="my-1">Welcome, {session.user.name}</p>
                                <p className="">{session.user.email}</p>
                                <p className="">Session expires on {session.expires}</p>
                            </>
                        ):(
                            <></>
                        )
                    }
                </div>
            </main>
        </div>
    )
}