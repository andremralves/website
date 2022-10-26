import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Layout from '../../components/Layout'
import styles from '../../styles/PostPage.module.css'

type Props = {
  params: {
    slug: string
  }
  frontmatter: {
    [key: string]: any
  }
  content: string
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(props: Props) {
  const fileName = fs.readFileSync(`posts/${props.params.slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}

const PostPage = (props: Props) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div>
          <img src={props.frontmatter.cover} alt="" />
          <h1 className={styles.title}>{props.frontmatter.title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: md().render(props.content) }}
          ></div>
        </div>
      </div>
    </Layout>
  )
}

export default PostPage
