import React from 'react'
import styles from '../styles/components/Header.module.css'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={styles.container}>
      <div className={styles.nav__container}>
        <a href="/">
          <span className={styles.logo__blue}>[ </span>
          <span className={styles.logo}>andre</span>
          <span className={styles.logo__red}>@</span>
          <span className={styles.logo}>alves</span>
          <span className={styles.logo__blue}> ]</span>
        </a>

        <nav className={styles.nav}>
          <div className={styles.nav__link}>
            <a href="">About</a>
          </div>
          <div className={styles.nav__link}>
            <a href="">Portfolio</a>
          </div>
          <div className={styles.nav__link}>
            <a href="">Blog</a>
          </div>
          <div className={styles.nav__link}>
            <a href="">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
