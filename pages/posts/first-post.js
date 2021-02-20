import {Button,
        PageHeader,
        message} from 'antd'
import Link from 'next/link'

export default function FirstPost() {
  return <>
    <PageHeader
    title="First post"
    subTitle="oh yeah!"
    onBack={()=> location.href = "/" }
    extra={
      <Button type="primary" onClick={() => message.info("Clicked!")}>Click me</Button>
    }>
    </PageHeader>


  </>
}
