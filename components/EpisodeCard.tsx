import Link from 'next/link'
import { Episode } from '@/lib/fetchRss'
import { htmlToPlainText } from '@/lib/htmlToPlainText'

interface EpisodeCardProps {
  episode: Episode
}

export function EpisodeCard({ episode }: EpisodeCardProps) {
  const plainTextContent = htmlToPlainText(episode.content);
  const encodedId = encodeURIComponent(episode.id);

  return (
    <Link href={`/episodes/${encodedId}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
        <h2 className="text-xl font-semibold mb-2">{episode.title}</h2>
        <p className="text-gray-600 mb-2">{plainTextContent.slice(0, 150)}...</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{new Date(episode.pubDate).toLocaleDateString()}</span>
          <span>{episode.itunes.duration}</span>
        </div>
      </div>
    </Link>
  )
}
