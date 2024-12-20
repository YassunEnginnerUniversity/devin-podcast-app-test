import React from 'react';
import { Episode } from '../lib/fetchRss';
import { EpisodeCard } from './EpisodeCard';
import { findRelatedEpisodes } from '../lib/episodeSimilarity';

interface RelatedEpisodesProps {
  currentEpisode: Episode;
  allEpisodes: Episode[];
}

export function RelatedEpisodes({ currentEpisode, allEpisodes }: RelatedEpisodesProps) {
  const relatedEpisodes = findRelatedEpisodes(currentEpisode, allEpisodes);

  if (relatedEpisodes.length === 0) return null;

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">関連エピソード</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  );
}
