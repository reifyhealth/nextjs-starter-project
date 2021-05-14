import {Button,
        PageHeader,
        message} from '@reifyhealth/picasso-pkg'
import { useRouter } from 'next/router'

export default function FirstPost() {
  const router = useRouter()

  return <>
    <PageHeader
    title="Page 1"
    subTitle="Sub title"
    onBack={()=> router.push("/") }
    >
    </PageHeader>

    <div className="o-iframe-block">
      <iframe src="https://www.youtube.com/embed/xvFZjo5PgG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen autoplay></iframe>
    </div>
  </>
}
