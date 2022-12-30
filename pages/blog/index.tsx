import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Tag from '../../components/Tag'

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
      <div className="max-w-prose mx-auto px-4">
        <h1 className="text-sky-100 text-2xl mb-5">Blog Posts</h1>
        {posts.map(({ slug, frontmatter }: any) => (
          <div key={slug} className="mb-5">
            <Link href={`/blog/${slug}`}>
              <a>
                <div className="flex mb-2">
                  {frontmatter.tags.map((tag: string) => (
                    <Tag key={tag} name={tag} />
                  ))}
                </div>
                <h1 className="text-sky-300 text-xl ">{frontmatter.title}</h1>
                <p className="text-sky-100 mb-2 ">{frontmatter.metaDesc}</p>
              </a>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </Layout>
  )
}
