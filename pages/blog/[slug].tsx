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
      <div className="mx-auto px-4 max-w-prose">
        <div className="flex flex-col max-w-prose">
          <img className="mb-5" src={props.frontmatter.cover} alt="" />
          <article
            className="prose prose-headings:text-slate-50"
            dangerouslySetInnerHTML={{ __html: md().render(props.content) }}
          ></article>
        </div>
      </div>
    </Layout>
  )
}

export default PostPage
