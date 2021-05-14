import Head from 'next/head'
import {Button,
        Space,
        PageHeader,
        Divider,
        message} from '@reifyhealth/picasso-pkg'
import Link from 'next/link'

export default function Home() {

  const friendlyGreeting = () => {
    var notes = ["Hello!", "Hola!", "Hi", "Welcome"];
    return notes[Math.floor(Math.random() * notes.length)]
  }

  return (
    <>
      <Space>
        <Link href="/posts/first-post">
          <Button type="link" >Page 1</Button>
        </Link>
        <Link href="/posts/second-post">
          <Button type="link" >Page 2</Button>
        </Link>
        
        <Button type="link" href="https://nextjs.org">NextJS docs</Button>
        <Button type="link" href="https://nextjs.org">NextJS docs</Button>
        <Button type="link" href="https://picasso-sprints.herokuapp.com/">Picasso docs</Button>
        <Button type="primary" onClick={() => message.info(friendlyGreeting())}>Click</Button>
      </Space>
      <Divider/>
      <h1>Next JS starter project</h1>
    </>
  )
}
