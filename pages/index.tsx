import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  useEffect(() => {
    fetch('/api/v1/explore')
  }, [])

  return (
    <div className={styles.container}>

    </div>
  )
}

export default Home
