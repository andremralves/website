import React from 'react'
import SectionTitle from '../SectionTitle'
import { SkillImage, SkillImageProps } from './SkillImage'
import styles from '../../styles/components/Skills.module.css'
import ListTitle from './ListTitle'
import TechList from './TechList'

type SkillsProps = {}

const languagesList: SkillImageProps[] = [
  { src: '/icons/typescript-logo.svg', alt: 'Typescript' },
  { src: '/icons/javascript-logo.svg', alt: 'Javascript' },
  { src: '/icons/java-logo.svg', alt: 'Java' },
  { src: '/icons/cpp-logo.png', alt: 'C++' },
  { src: '/icons/php-logo.svg', alt: 'Php' },
]

const backendList: SkillImageProps[] = [
  { src: '/icons/nodejs-logo.svg', alt: 'NodeJs' },
  { src: '/icons/express-logo.png', alt: 'ExpressJs' },
  { src: '/icons/django-logo.png', alt: 'Django' },
]

const frontendList: SkillImageProps[] = [
  { src: '/icons/nextjs-logo.png', alt: 'NextJs' },
  { src: '/icons/react-logo.png', alt: 'React' },
]

const databaseList: SkillImageProps[] = [
  { src: '/icons/mysql-logo.png', alt: 'MySQL' },
  { src: '/icons/postgresql-logo.png', alt: 'PostgreSQL' },
]

const toolsList: SkillImageProps[] = [
  { src: '/icons/docker-logo.svg', alt: 'Docker' },
  { src: '/icons/linux-logo.svg', alt: 'Linux' },
  { src: '/icons/git-logo.svg', alt: 'Git' },
]

const Skills = (props: SkillsProps) => {
  return (
    <div>
      <SectionTitle title="skills" />
      <div className="flex flex-col md:flex-row md:justify-around ">
        <div className="flex flex-col">
          <ListTitle title="Languages" />
          <TechList items={languagesList} />
        </div>

        <div className="flex flex-col">
          <ListTitle title="Backend" />
          <TechList items={backendList} />
        </div>

        <div className="flex flex-col">
          <ListTitle title="Frontend" />
          <TechList items={frontendList} />
        </div>

        <div className="flex flex-col">
          <ListTitle title="Database" />
          <TechList items={databaseList} />
        </div>

        <div className="flex flex-col">
          <ListTitle title="Tools" />
          <TechList items={toolsList} />
        </div>
      </div>
    </div>
  )
}

export default Skills
