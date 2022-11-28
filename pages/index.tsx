import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import Social from '../components/Social'
import ProjectsList from '../components/ProjectsList'
import About from '../components/About'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.main}>
            <About />
            <ProjectsList />
            <Skills />
          </div>
          <div className={styles.sidebar}>
            <Social />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Home
