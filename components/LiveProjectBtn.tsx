import React from 'react'

type LiveProjectBtn = {
  link: string
}

const LiveProjectBtn = (props: LiveProjectBtn) => {
  return (
    <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
      <a href={props.link} target="_blank" rel="noreferrer">
        Live Project
      </a>
    </button>
  )
}

export default LiveProjectBtn
