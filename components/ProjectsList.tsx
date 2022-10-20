import React from 'react'
import styles from '../styles/components/ProjectsList.module.css'
import ProjectCard from './ProjectCard'

type Props = {}

const ProjectsList = (props: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>PROJECTS</h1>
      <section id={styles.list}>
        <ProjectCard
          img="https://user-images.githubusercontent.com/71379045/168422458-98dbd26d-f6be-4db5-b9ae-fb1d3279592c.png"
          title="Django CRM"
          tech={['Python', 'Django', 'Html', 'Css', 'Bootstrap']}
          description="A CRM system to manage patients and appointments."
          btnLink="https://github.com/andremralves/django-CRM"
        />
        <ProjectCard
          img="https://user-images.githubusercontent.com/71379045/191885681-302e5da2-cf88-48b6-867c-8861122df90f.gif"
          title="Sorting Visualizer"
          tech={['C++', 'SFML']}
          description="A desktop application that enables you to visualize how sorting algorithms work. It was built using the SFML framework"
          btnLink="https://github.com/andremralves/cpp_sorting_visualizer"
        />
      </section>
    </div>
  )
}

export default ProjectsList
