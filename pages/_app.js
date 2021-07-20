import "tailwindcss/tailwind.css"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  //Removing material ui effect on reload
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
