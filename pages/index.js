import axios from 'axios'
import Head from 'next/head'
import Featured from '../components/Featured'
import styles from '../styles/Home.module.css'
import PizzaList from '../components/PizzaList'
export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matteo&apos;s Pizza</title>
        <meta name="description" content="Best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList = {pizzaList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products')
  return {
    props: {
      pizzaList: res.data,
    },
  }
}
