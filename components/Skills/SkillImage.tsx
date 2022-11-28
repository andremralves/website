import React from 'react'

export type SkillImageProps = {
  src: string
  alt: string
}
export const SkillImage = (props: SkillImageProps) => {
  return <img className="w-14 m-1" src={props.src} alt={props.alt} />
}
