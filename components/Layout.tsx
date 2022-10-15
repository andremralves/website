import React, { Component } from 'react'
import Header from './Header'

type Props = {
  children: JSX.Element,
}

const Layout = ({children}: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout