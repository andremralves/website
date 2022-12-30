import React, { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/components/Header.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  let menu
  if (showMenu) {
    menu = (
      <div className={styles.dropdownMenu}>
        <div>
          <FaTimes
            className={styles.dropdownMenu__closeIcon}
            size={30}
            onClick={() => {
              setShowMenu(false)
            }}
          />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a
                onClick={() => {
                  setShowMenu(false)
                }}
              >
                {router.pathname == '/' ? (
                  <button className="text-orange-500 hover:text-sky-500">
                    Home
                  </button>
                ) : (
                  <button className="hover:text-sky-500">Home</button>
                )}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a
                onClick={() => {
                  setShowMenu(false)
                }}
              >
                {router.pathname == '/blog' ? (
                  <button className="text-orange-500 hover:text-sky-500">
                    Blog
                  </button>
                ) : (
                  <button className="hover:text-sky-500">Blog</button>
                )}
              </a>
            </Link>
          </li>
          <li>
            <Link
              href="/files/resume_pt-br.pdf"
              target="_blank"
              rel="noreferrer"
              download
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <header className={styles.container}>
      <div className={styles.nav__container}>
        <Link href="/">
          <a className={styles.logo__container}>
            <span className={styles.logo__blue}>[ </span>
            <span className={styles.logo}>andre</span>
            <span className={styles.logo__red}>@</span>
            <span className={styles.logo}>alves</span>
            <span className={styles.logo__blue}> ]</span>
          </a>
        </Link>

        <nav className="flex align-middle pr-5">
          <div
            className={`text-xl ${
              router.pathname == '/' ? 'text-orange-500' : ''
            } hidden md:block hover:text-sky-500`}
          >
            <Link href="/">Home</Link>
          </div>
          <div
            className={`text-xl ${
              router.pathname == '/blog' ? 'text-orange-500' : ''
            } hidden md:block hover:text-sky-500 pl-5`}
          >
            <Link href="/blog">Blog</Link>
          </div>
          <div className="text-xl hidden md:block hover:text-sky-500 pl-5">
            <Link
              href="/files/resume_pt-br.pdf"
              target="_blank"
              rel="noreferrer"
              download
            >
              Resume
            </Link>
          </div>
          <FaBars
            className="block md:hidden cursor-pointer select-none hover:text-orange-500"
            size={25}
            onClick={() => {
              setShowMenu(true)
            }}
          />
          {menu}
        </nav>
      </div>
    </header>
  )
}

export default Header
