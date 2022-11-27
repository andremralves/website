import React from 'react'
import SectionTitle from './SectionTitle'
import styles from '../styles/components/Skills.module.css'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div>
      <SectionTitle title="skills" />
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillTitle}>Languages</h2>
        <ul className={styles.skillsList}>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/typescript-logo.svg"
              alt="Typescript"
            />
          </li>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/javascript-logo.svg"
              alt="Javascript"
            />
          </li>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/java-logo.svg"
              alt="Java"
            />
          </li>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/cpp-logo.png"
              alt="C++"
            />
          </li>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/php-logo.svg"
              alt="Php"
            />
          </li>
        </ul>
      </div>
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillTitle}>Backend Frameworks</h2>
        <ul className={styles.skillsList}>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/nodejs-logo.svg"
              alt="NodeJs"
            />
          </li>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/express-logo.png"
              alt="ExpressJs"
            />
          </li>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/django-logo.png"
              alt="Django"
            />
          </li>
        </ul>
      </div>
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillTitle}>Frontend Frameworks</h2>
        <ul className={styles.skillsList}>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/nextjs-logo.png"
              alt="NextJs"
            />
          </li>
        </ul>
      </div>
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillTitle}>Databases</h2>
        <ul className={styles.skillsList}>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/mysql-logo.png"
              alt="MySQL"
            />
          </li>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/postgresql-logo.png"
              alt="PostgreSQL"
            />
          </li>
        </ul>
      </div>
      <div className={styles.skillsContainer}>
        <h2 className={styles.skillTitle}>Tools</h2>
        <ul className={styles.skillsList}>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/docker-logo.svg"
              alt="Docker"
            />
          </li>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/linux-logo.svg"
              alt="Linux"
            />
          </li>
          <li>
            <img
              className={styles.skillImg}
              src="/icons/git-logo.svg"
              alt="Git"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Skills
