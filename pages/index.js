import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import dynamic from 'next/dynamic'

const Terminal = dynamic(()=>import('@components/MyTerm'),
  {ssr:false}
)

export default function Home() {
  //setTimeout(Debatron, 1000);
  return (
    <div className="container">
      <Head>
        <title>Draft of plan F demo as service</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Apokryf Institute & RedScope Technologies" />
        <p className="description">
          code can be viewed on <code>https://github.com/The-Apokryf/demoraptor.netify.app</code>
        </p>
        <Terminal />
      </main>

      <Footer />
    </div>
  )
}
