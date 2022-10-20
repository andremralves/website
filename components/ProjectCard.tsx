import React from 'react'
import styles from '../styles/components/ProjectCard.module.css'

type Props = {
  img: string
  title: string
  tech: Array<string>
  description: string
  btnLink: string
}

const ProjectCard = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <img src={props.img} alt={props.title} />
      </div>
      <div className={styles.container__right}>
        <div>
          <h1>{props.title}</h1>
          <div className={styles.techRow}>
            {props.tech.map((item) => (
              <span className={styles.techTag}>{item}</span>
            ))}
          </div>
          <p>{props.description}</p>
        </div>
        <div>
          <button>
            <a href={props.btnLink} target="_blank">
              Learn More
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
