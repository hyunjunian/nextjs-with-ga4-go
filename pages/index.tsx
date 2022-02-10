import type {NextPage} from "next"
import Link from "next/link"
import Head from "next/head"

const Home: NextPage = () => {
    return <>
        <Head>
            <title>Home</title>
        </Head>
        <h1>Home</h1>
        <Link href="/hello">hello</Link>
    </>
}

export default Home
