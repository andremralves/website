import React from 'react'
import { SkillImage, SkillImageProps } from './SkillImage'

export type TechListProps = {
  items: SkillImageProps[]
}

const TechList = (props: TechListProps) => {
  return (
    <ul className="flex justify-center md:justify-start md:flex-col flex-wrap max-h-60">
      {props.items.map((item) => (
        <li key={item.alt} className="flex justify-center mb-2">
          <SkillImage src={item.src} alt={item.alt} />
        </li>
      ))}
    </ul>
  )
}

export default TechList
