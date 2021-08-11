import { useRouter } from "next/router"
import Link from "next/link"
import Layout from "../../components/Layout"
import data from "../../utils/data"
import Image from "next/image"
import useStyles from "../../utils/styles"
import {
  Grid,
  List,
  ListItem,
  Typography,
  Card,
  Button,
} from "@material-ui/core"

const ProductDetails = () => {
  const classes = useStyles()
  const router = useRouter()
  const { slug } = router.query
  const product = data.products.find((p) => p.slug === slug)

  if (!product) {
    return <h1>Product Not Found</h1>
  }
  return (
    <Layout title={product.name} description={product.description}>
      <div className='text-gray-600 font-bold my-4'>
        <Link href='/'>
          <a>
            <h6>back to products</h6>
          </a>
        </Link>
      </div>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout='responsive'
          ></Image>
        </Grid>
        <Grid item md={3} xs={12}>
          <List>
            <ListItem>
              <Typography component='h1' variant='h1'>
                {product.name}
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>Category:{product.category}</Typography>
            </ListItem>
            <ListItem>
              {" "}
              <Typography>Brand: {product.brand}</Typography>{" "}
            </ListItem>
            <ListItem>
              <Typography variant='body1'>
                Rating: {product.rating} stars ({product.numReviews} reviews)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>{product.description}</Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item md={3} xs={12}>
          <Card>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant='body1'>Price:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant='body1'>{product.price}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
            </List>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={6}>
                    <Typography variant='body1'>Status:</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant='body1'>
                      {product.countInStock > 0 ? "In stock" : "Unavailble"}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Button fullWidth variant='contained' color='primary'>
                  Add to cart
                </Button>
              </ListItem>
            </List>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ProductDetails
