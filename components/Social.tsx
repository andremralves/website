import React from 'react'
import styles from '../styles/components/Social.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import SectionTitle from './SectionTitle'

type Props = {}

const Social = (props: Props) => {
  return (
    <div className={styles.container}>
      <SectionTitle title="social" />
      <ul className={styles.list}>
        <li>
          <a
            className={styles.list__item}
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={'https://github.com/andremralves'}
          >
            <FaGithub size={30} />
            <span>Github</span>
          </a>
        </li>
        <li>
          <a
            className={styles.list__item}
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={'https://www.linkedin.com/in/andr%C3%A9-alves-9b091220a/'}
          >
            <FaLinkedin color="#0a66c2" size={30} />
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a
            className={styles.list__item}
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={'mailto:andremralves@gmail.com'}
          >
            <img
              className={styles.list__icon}
              src="/icons/gmail.png"
              alt="Gmail icon"
            />
            <span>Email</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Social
