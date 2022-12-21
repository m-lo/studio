import Head from 'next/head'
import Cursor from '@/components/Cursor'

const title = 'Marcus Lo - Software Engineer, Product Designer & Media Artist';
const description = 'Portfolio of Software Engineer, Product Designer, and Media Artist Marcus Lo, currently based in Sydney, Australia';
const type = 'website';
const url = 'https://mlo.studio';

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="title" property="og:title" content={title} />
        <meta name="type" property="og:type" content={type} />
        <meta name="url" property="og:url" content={url} />
        <meta name="description" property="og:description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Cursor />
      </main>
    </>
  )
}
