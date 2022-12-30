import React from 'react'

type TagProps = {
  name: string
}

type MapType = {
  [id: string]: string
}
const tagColor: MapType = {
  NextJs: 'bg-blue-300',
  Typescript: 'bg-blue-500',
  Python: 'bg-orange-500',
  Django: 'bg-green-600',
  React: 'bg-sky-400',
  Html: 'bg-yellow-200',
  Css: 'bg-purple-200',
  Bootstrap: 'bg-red-300',
  Tailwindcss: 'bg-green-300',
  SFML: 'bg-amber-500',
  'C++': 'bg-red-500',
  'Data Structures': 'bg-orange-300',
}

const Tag = (props: TagProps) => {
  return (
    <span className={`px-2 ${tagColor[props.name]} rounded text-black`}>
      {props.name}
    </span>
  )
}

export default Tag
