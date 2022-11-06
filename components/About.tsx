import React from 'react'
import styles from '../styles/components/About.module.css'
import SectionTitle from './SectionTitle'

type Props = {}

const About = (props: Props) => {
  return (
    <div className={styles.container}>
      <SectionTitle title="about me" />
      <div className={styles.card}>
        <img
          src="https://avatars.githubusercontent.com/u/71379045?v=4"
          alt="My avatar"
        />
        <p>
          I&apos;m André Alves, a Full Stack Developer and Software Engineering
          student. This is my personal portfolio/blog, where I keep all my work
          as a developer.
        </p>
      </div>
    </div>
  )
}

export default About
