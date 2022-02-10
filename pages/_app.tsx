import "../styles/globals.css"
import type {AppProps} from "next/app"
import Script from "next/script"
import Head from "next/head"

const GOOGLE_OPTIMIZE = "OPT-TG3P9D7"
const GOOGLE_ANALYTICS = "G-J1VEB81PHX"

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>nextjs-with-ga4-go</title>
            <style dangerouslySetInnerHTML={{
                __html: ".async-hide {opacity: 0 !important}",
            }}/>
            <script dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GOOGLE_ANALYTICS}');(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;})(window,document.documentElement,'async-hide','dataLayer',4000,{'${GOOGLE_OPTIMIZE}':true});`,
            }}/>
        </Head>
        <Script src={`https://www.googleoptimize.com/optimize.js?id=${GOOGLE_OPTIMIZE}`}/>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS}`}/>
        <Component {...pageProps} />
    </>
}

export default MyApp
