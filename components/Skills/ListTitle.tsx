import React from 'react'

type Props = {
  title: string
}

const ListTitle = (props: Props) => {
  return <h2 className="text-xl mb-3 text-center">{props.title}</h2>
}

export default ListTitle
