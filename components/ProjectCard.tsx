import React from 'react'
import styles from '../styles/components/ProjectCard.module.css'
import LiveProjectBtn from './LiveProjectBtn'
import SrcCodeBtn from './SrcCodeBtn'
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
          <div className="flex flex-wrap gap-2 mb-2">
            {props.tech.map((tag) => (
              <Tag key={tag} name={tag} />
            ))}
          </div>
          <p>{props.description}</p>
        </div>
        <div className="flex">
          {props.liveLink && (
            <div className="mr-2">
              <LiveProjectBtn link={props.liveLink} />
            </div>
          )}
          {props.srcLink && (
            <div>
              <SrcCodeBtn link={props.srcLink} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
