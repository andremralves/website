import React from 'react'
import styles from '../styles/components/ProjectsList.module.css'
import ProjectCard from './ProjectCard'

type Props = {}

const ProjectsList = (props: Props) => {
  function projects() {
    let projects = []
    for (let i = 0; i < 3; i++) {
      projects.push(<ProjectCard />)
    }
    return projects
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PROJECTS</h1>
      <section id={styles.list}>{projects()}</section>
    </div>
  )
}

export default ProjectsList
