import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { fetchRss } from '@/lib/fetchRss'
import { htmlToPlainText } from '@/lib/htmlToPlainText'
import { notFound } from 'next/navigation'

export default async function EpisodePage({ params }: { params: { id: string } }) {
  const episodes = await fetchRss();
  const decodedId = decodeURIComponent(params.id);
  const episode = episodes.find((ep) => ep.id === decodedId);

  if (!episode) {
    notFound()
  }

  const plainTextContent = htmlToPlainText(episode.content);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
          <h1 className="text-3xl font-bold mb-4">{episode.title}</h1>
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>{new Date(episode.pubDate).toLocaleDateString()}</span>
            <span>{episode.itunes.duration}</span>
          </div>
          <div className="mb-6 whitespace-pre-wrap">{plainTextContent}</div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Listen to Episode</h2>
            <audio controls className="w-full">
              <source src={episode.enclosure.url} type={episode.enclosure.type} />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

