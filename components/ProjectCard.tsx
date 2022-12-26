import React from 'react'
import styles from '../styles/components/ProjectCard.module.css'
import Tag from './Tag'

type Props = {
  img: string
  title: string
  tech: Array<string>
  description: string
  srcLink?: string
  liveLink?: string
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
            {props.tech.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
          <p>{props.description}</p>
        </div>
        <div className="flex">
          {props.liveLink && (
            <div className="mr-2">
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
                <a href={props.liveLink} target="_blank" rel="noreferrer">
                  Live Project
                </a>
              </button>
            </div>
          )}
          {props.srcLink && (
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <a href={props.srcLink} target="_blank" rel="noreferrer">
                  Source Code
                </a>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
