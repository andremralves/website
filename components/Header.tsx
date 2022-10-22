import React from 'react'
import styles from '../styles/components/Header.module.css'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={styles.container}>
      <div className={styles.nav__container}>
        <Link href="/">
          <a>
            <span className={styles.logo__blue}>[ </span>
            <span className={styles.logo}>andre</span>
            <span className={styles.logo__red}>@</span>
            <span className={styles.logo}>alves</span>
            <span className={styles.logo__blue}> ]</span>
          </a>
        </Link>

        <nav className={styles.nav}>
          <div className={styles.nav__link}>
            <Link href="/">About</Link>
          </div>
          <div className={styles.nav__link}>
            <Link href="/">Portfolio</Link>
          </div>
          <div className={styles.nav__link}>
            <Link href="/">Blog</Link>
          </div>
          <div className={styles.nav__link}>
            <Link href="/">Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
