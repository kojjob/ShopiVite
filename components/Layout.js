import React, { useContext } from "react"
import Head from "next/head"
import Link from "next/link"

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Switch,
} from "@material-ui/core"
import useStyles from "../utils/styles"
import { Store } from "../utils/Store"
import Cookies from "js-cookie"

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store)
  const { darkMode } = state
  const theme = createTheme({
    typography: {
      h1: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1.6rem",
        fontWeight: "400",
        margin: "1rem 0",
      },
      h2: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1.4rem",
        fontWeight: "400",
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#0091EA",
      },
      secondary: {
        main: "#208080",
      },
    },
  })

  const classes = useStyles()
  const darkModeXHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" })
    const newDarkMode = !darkMode
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF")
  }
  return (
    <div>
      <Head>
        <title>{title ? `${title} - ShopiVite` : "ShopiVite"}</title>
        {description && <meta name='description' content={description} />}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position='static' className={classes.navbar}>
          <Toolbar>
            <Link href='/'>
              <a className='font-bold'>
                <Typography className={classes.brand}>ShopiVite</Typography>
              </a>
            </Link>
            <div className={classes.grow}></div>
            <div className='flex justify-center items-center mr-2'>
              <Link href='/'>
                <a className='font-bold'>
                  <Typography>Cart</Typography>
                </a>
              </Link>
              <Link href='/'>
                <a className='font-bold'>
                  <Typography>Login</Typography>
                </a>
              </Link>
              <Switch
                checked={darkMode}
                color={theme.palette.primary.main}
                onChange={darkModeXHandler}
              ></Switch>
            </div>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography className='mx-auto text-4xl'>
            <h1 className='font-semibold mx-auto text-gray-500'>
              All rights reserved ShopiVite
            </h1>
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  )
}
