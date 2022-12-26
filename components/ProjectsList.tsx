import React from 'react'
import styles from '../styles/components/ProjectsList.module.css'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'

type Props = {}

const ProjectsList = (props: Props) => {
  return (
    <div className={styles.container}>
      <SectionTitle title="projects" />
      <section id={styles.list}>
        <ProjectCard
          img="/images/site_project.jpg"
          title="This Website"
          tech={['NextJs', 'Typescript']}
          description="My personal website built with Typescript, NexJs and deployed on Vercel."
          srcLink="https://github.com/andremralves/website"
        />
        <ProjectCard
          img="https://user-images.githubusercontent.com/71379045/168422458-98dbd26d-f6be-4db5-b9ae-fb1d3279592c.png"
          title="Django CRM"
          tech={['Python', 'Django', 'Html', 'Css', 'Bootstrap']}
          description="A CRM system to manage patients and appointments."
          srcLink="https://github.com/andremralves/django-CRM"
        />
        <ProjectCard
          img="https://user-images.githubusercontent.com/71379045/201732178-12102e46-331b-43f8-ac40-ac9e7233921a.png"
          title="Todo List"
          tech={['Typescript', 'React', 'Tailwindcss']}
          description="A Todo List app built with Typescript, TailwindCss, React and using Local Storage to store your tasks."
          srcLink="https://github.com/andremralves/react-tailwind-todolist"
          liveLink="https://serene-salmiakki-a825e6.netlify.app/"
        />
        <ProjectCard
          img="https://user-images.githubusercontent.com/71379045/191885681-302e5da2-cf88-48b6-867c-8861122df90f.gif"
          title="Sorting Visualizer"
          tech={['C++', 'SFML']}
          description="A desktop application that enables you to visualize how sorting algorithms work. It was built using the SFML framework"
          srcLink="https://github.com/andremralves/cpp_sorting_visualizer"
        />
      </section>
    </div>
  )
}

export default ProjectsList
