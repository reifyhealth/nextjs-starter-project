import '@reifyhealth/picasso-pkg/dist/stylesheets/themes/antd.sites.css'
import '../scss/custom-styles.scss'

export default function App({ Component, pageProps }) {
  return <>
  <div className="o-layout">
    <div className="o-layout__header">
      <img width={80} src="https://s3.amazonaws.com/reifyhealth.design/images/logos/svg/reify-health-logo-mark-full-color-rgb.svg"/>
    </div>
    <div className="o-layout__content">
      <Component {...pageProps} />
    </div>
    <div className="o-layout__footer">
      Footer
    </div>
  </div>
  </>
}
