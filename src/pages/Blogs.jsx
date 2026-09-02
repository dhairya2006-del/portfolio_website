import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import blogs from '../data/blogs'
import Eyebrow from '../components/Eyebrow'

export default function Blogs() {
  const sorted = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="animate-fadeUp">
      <Eyebrow>Writing</Eyebrow>
      <h1 className="text-2xl font-bold mb-8">Blogs</h1>

      {sorted.length === 0 ? (
        <p className="text-mist font-mono text-sm">No posts yet — first one's coming soon.</p>
      ) : (
        <div className="divide-y divide-line border-t border-b border-line">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              to={`/blogs/${post.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-5 hover:bg-paper/60 -mx-2 px-2 rounded-md transition-colors"
            >
              <div>
                <h2 className="font-display font-semibold text-bone group-hover:text-signal transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-fog mt-1 max-w-xl">{post.excerpt}</p>
                {post.tags?.length > 0 && (
                  <div className="flex gap-1.5 mt-2">
                    {post.tags.map((t) => (
                      <span key={t} className="font-mono text-[11px] text-mist">
                        #{t.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <time className="font-mono text-xs text-mist">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <ArrowUpRight size={14} className="text-mist group-hover:text-signal transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
