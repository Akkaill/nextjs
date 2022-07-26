import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import  Nav from '../compp/nav'
import styles from '../styles/Home.module.css'
import Footer from '../compp/footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  )
}

export default Home
