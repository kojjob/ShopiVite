import React from "react"
import Head from "next/head"
import Link from "next/link"

import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  createMuiTheme,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core"
import useStyles from "../utils/styles"

export default function Layout({ title, description, children }) {
  const theme = createMuiTheme({
    typography: {
      h1: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1.6rem",
        fontWeight: "400",
        // color: "rgba(0, 0, 0, 0.87)",
        margin: "1rem 0",
      },
      h2: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: "1.4rem",
        fontWeight: "400",
        // color: "rgba(0, 0, 0, 0.87)",
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: "light",
      primary: {
        main: "#f0c00",
      },
      secondary: {
        main: "#0876f5",
      },
    },
  })

  const classes = useStyles()
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
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography className='mx-auto text-4xl'>
            <h1 className='font-semibold mx-auto text-gray-600'>
              All rights reserved ShopiVite
            </h1>
          </Typography>
        </footer>
      </ThemeProvider>
    </div>
  )
}
