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

type MapType = {
  [id: string]: string
}
const tagColor: MapType = {
  nextjs: 'blue',
  'c++': 'red',
  first: 'red',
  'data structures': 'green',
}

export default function Blog({ posts }: any) {
  return (
    <Layout>
      <div className="mx-10">
        <h1 className="text-sky-100 text-2xl mb-5">Blog Posts</h1>
        {posts.map(({ slug, frontmatter }: any) => (
          <div key={slug} className="mb-5">
            <Link href={`/blog/${slug}`}>
              <a>
                <div className="flex mb-2">
                  {frontmatter.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className={`px-2 mr-2 bg-${tagColor[tag]}-300 rounded text-black`}
                    >
                      {tag}
                    </span>
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
