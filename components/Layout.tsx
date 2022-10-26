import React, { Component } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/components/Layout.module.css'

type Props = {
  title: string
  children: JSX.Element
}

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'André Alves',
}

export default Layout
