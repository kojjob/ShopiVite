import React from "react"
import Head from "next/head"
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core"
import useStyles from "../utils/styles"

export default function Layout({ children }) {
  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>ShopiVite</title>
      </Head>
      <AppBar position='static' className={classes.navbar}>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            ShopiVite
          </Typography>
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
    </div>
  )
}
