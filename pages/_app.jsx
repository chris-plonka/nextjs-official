import '../app/global.css'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps, session }) {
    return (
        <div className="mx-auto max-w-4xl md:px-20 px-5 py-5">
            <SessionProvider session={session}>

                <Component {...pageProps} />

            </SessionProvider>
        </div>
    );
}

export default MyApp
