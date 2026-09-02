import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import blogs from '../data/blogs'
import Eyebrow from '../components/Eyebrow'
import NotFound from './NotFound'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = blogs.find((b) => b.slug === slug)

  if (!post) return <NotFound />

  return (
    <div className="animate-fadeUp">
      <Link
        to="/blogs"
        className="inline-flex items-center gap-1.5 font-mono text-xs text-mist hover:text-bone transition-colors mb-8"
      >
        <ArrowLeft size={13} /> all posts
      </Link>

      <Eyebrow>
        {new Date(post.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </Eyebrow>
      <h1 className="text-2xl sm:text-3xl font-bold text-balance">{post.title}</h1>

      {post.tags?.length > 0 && (
        <div className="flex gap-1.5 mt-4">
          {post.tags.map((t) => (
            <span key={t} className="font-mono text-[11px] px-2 py-0.5 rounded border border-line text-mist">
              {t}
            </span>
          ))}
        </div>
      )}

      <article
        className="prose prose-invert prose-sm sm:prose-base max-w-none mt-10
        prose-headings:font-display prose-headings:text-bone
        prose-p:text-fog prose-li:text-fog prose-strong:text-bone
        prose-a:text-volt prose-a:no-underline hover:prose-a:underline
        prose-code:font-mono prose-code:text-amber prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-paper prose-pre:border prose-pre:border-line
        prose-blockquote:border-l-signal prose-blockquote:text-mist
        prose-hr:border-line"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>
    </div>
  )
}
