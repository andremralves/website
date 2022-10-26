import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout'

export async function getStaticProps() {
  const files = fs.readdirSync('posts')
  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const readFile = fs.readFileSync(`posts/${filename}`, 'utf-8')
    const { data: frontmatter } = matter(readFile)
    return {
      slug,
      frontmatter,
    }
  })
  return {
    props: {
      posts,
    },
  }
}

export default function Blog({ posts }: any) {
  return (
    <Layout>
      <div>
        {posts.map(({ slug, frontmatter }: any) => (
          <div key={slug}>
            <Link href={`/blog/${slug}`}>
              <a>
                <h1>{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
