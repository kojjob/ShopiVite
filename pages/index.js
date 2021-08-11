import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import Layout from "../components/Layout"
import data from "../utils/data"

function Home() {
  return (
    <Layout>
      <div>
        <h1 className='text-4xl my-4 text-gray-500 font-bold'>Products</h1>
        <Grid container spacing={3}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.id}>
              <Card>
                <Link href={`/product/${product.slug}`}>
                  <a>
                    <CardActionArea>
                      <CardMedia
                        component='img'
                        image={product.image}
                        title={product.name}
                      ></CardMedia>
                      <CardContent>
                        <Typography>{product.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </a>
                </Link>
                <CardActions>
                  <Typography fontWeight='fontWeightBold'>
                    ${product.price}
                  </Typography>
                  <Button size='small' color='primary' variant='outlined'>
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  )
}
export default Home
