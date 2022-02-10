import type {NextPage} from "next"
import Link from "next/link"
import Head from "next/head"

const Hello: NextPage = () => {
    return <>
        <Head>
            <title>Hello</title>
        </Head>
        <h1>Hello</h1>
        <Link href="/">home</Link>
    </>
}

export default Hello
