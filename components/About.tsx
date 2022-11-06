import React from 'react'
import styles from  '../styles/components/About.module.css'

type Props = {}

const About = (props: Props) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>ABOUT ME</h1>
        <div className={styles.card}>
            <img src="https://avatars.githubusercontent.com/u/71379045?v=4" alt="My avatar" />
            <p>I'm André Alves, a Full Stack Developer and Software Engineering student. This is my personal portfolio/blog, 
                where I keep all my work as a developer.
            </p>
        </div>
    </div>
  )
}

export default About