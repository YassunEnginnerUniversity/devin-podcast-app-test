import { Header } from '@/components/Header'
import { EpisodeCard } from '@/components/EpisodeCard'
import { Footer } from '@/components/Footer'
import { fetchRss, Episode } from '@/lib/fetchRss'

export default async function Home() {
  const episodes = await fetchRss();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Latest Episodes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

