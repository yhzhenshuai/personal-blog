import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  tags: string[]
  category: 'daily' | 'config' | 'project' | 'research'
  readingTime: string
}

const postsDirectory = path.join(process.cwd(), 'content/posts')

export function getAllPosts(): Post[] {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      // Calculate reading time (approx 200 words per minute)
      const words = content.trim().split(/\s+/).length
      const minutes = Math.ceil(words / 200)

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || content.slice(0, 150).replace(/#|\*|\`/g, '') + '...',
        content,
        tags: data.tags || [],
        category: data.category || 'daily',
        readingTime: `${minutes} 分钟`,
      }
    })

  // Sort by date
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    if (!fs.existsSync(fullPath)) {
      const mdPath = path.join(postsDirectory, `${slug}.md`)
      if (!fs.existsSync(mdPath)) {
        return null
      }
    }

    const filePath = fs.existsSync(fullPath) ? fullPath : path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / 200)

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.slice(0, 150) + '...',
      content,
      tags: data.tags || [],
      category: data.category || 'daily',
      readingTime: `${minutes} 分钟`,
    }
  } catch {
    return null
  }
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.category === category)
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags)
}
