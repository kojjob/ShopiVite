import Head from "next/head"
import Image from "next/image"
import Layout from "../components/Layout"

function Home() {
  return (
    <Layout>
      <div className=''>
        <h1 className='text-4xl mt-4'>Products</h1>
        <ul className='ml-4'>
          <li>Eggs</li>
          <li>Oranges</li>
          <li>Bags</li>
          <li>Cars</li>
          <li>Laptop</li>
        </ul>
      </div>
    </Layout>
  )
}
export default Home
