import { GetStaticProps } from 'next'

import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './home.module.scss'

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ignews</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>react</span> world</h1>
          <p>
            Get access to all the publications <br/>
            <span>for {product.amount} for month</span>
          </p>
          <SubscribeButton />
        </section>
        <img src="/images/woman.svg" alt="girl programming" />
      </main>
    </>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KchDFHIGqQg2DQDELTii37E', 
  {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-us', 
    {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }
  
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}
