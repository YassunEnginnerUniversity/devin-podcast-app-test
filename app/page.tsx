import { Header } from '@/components/Header'
import { EpisodeList } from '@/components/EpisodeList'
import { Footer } from '@/components/Footer'
import { fetchRss } from '@/lib/fetchRss'

export default async function Home() {
  const episodes = await fetchRss();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold mb-6">Latest Episodes</h1>
        <EpisodeList episodes={episodes} />
      </main>
      <Footer />
    </div>
  )
}

