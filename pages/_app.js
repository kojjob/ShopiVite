import "tailwindcss/tailwind.css"
import { useEffect } from "react"
import StoreProvider from "../utils/Store"

function MyApp({ Component, pageProps }) {
  //Removing material ui effect on reload
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
