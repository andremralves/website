import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/components/Layout.module.css'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
