const fs = require('fs')
const matter = require('gray-matter')

const files = fs.readdirSync('posts')

const posts = files.map((filename) => {
  const slug = filename.replace('.md', '')
  const readFile = fs.readFileSync(`posts/${filename}`, 'utf-8')
  const data = matter(readFile)

  console.log(data)
  return {
    slug,
    data,
  }
})

console.log(files)
