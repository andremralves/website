import React from 'react'
import styles from '../styles/components/SectionTitle.module.css'

type Props = {
    title: string
}

const SectionTitle = (props: Props) => {
  return (
    <h1 className={styles.title}>{props.title}</h1>
  )
}

export default SectionTitle