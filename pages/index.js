import Head from 'next/head'
import {Button,
        Space,
        PageHeader,
        message} from 'antd'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <PageHeader
        title="Welcome"
        subTitle="NextJS!"
        extra={
          <Space>
            <a href="https://nextjs.org">View docs</a>
            <Button type="primary" onClick={() => message.info("Clicked!")}>Click me</Button>
          </Space>
        }>
        <Link href="/posts/first-post">
          <a>1</a>
        </Link>
        <Link href="/posts/second-post">
          <a>2</a>
        </Link>

        </PageHeader>
      </main>
    </div>
  )
}
