import React from 'react'
import styles from '../styles/components/ProjectCard.module.css'

type Props = {}

const ProjectCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <img src="images/sunset.jpg" alt="" />
      <div className={styles.container__right}>
        <div>
          <h1>Django CRM</h1>
          <p>Django CRM</p>
        </div>
        <button>Learn More</button>
      </div>
    </div>
  )
}

export default ProjectCard
