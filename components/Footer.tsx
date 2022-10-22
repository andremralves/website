import React from 'react'
import styles from '../styles/components/Footer.module.css'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className={styles.container}>
      <p>By André Alves</p>
    </footer>
  )
}

export default Footer
