import React from 'react'

type SrcCodeBtn = {
  link: string
}

const SrcCodeBtn = (props: SrcCodeBtn) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <a href={props.link} target="_blank" rel="noreferrer">
        Source Code
      </a>
    </button>
  )
}

export default SrcCodeBtn
