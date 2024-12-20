'use client';

import React, { useState } from 'react';
import type { Episode } from '../lib/fetchRss';
import { EpisodeCard } from './EpisodeCard';

const ITEMS_PER_PAGE = 12;  // Shows 4x3 grid initially

interface EpisodeListProps {
  episodes: Episode[];
}

export function EpisodeList({ episodes }: EpisodeListProps) {
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const hasMore = displayCount < episodes.length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {episodes.slice(0, displayCount).map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => {
              setIsLoading(true);
              setDisplayCount(prev => prev + ITEMS_PER_PAGE);
              setIsLoading(false);
            }}
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors duration-200 disabled:bg-blue-300"
          >
            {isLoading ? '読み込み中...' : 'もっと見る'}
          </button>
        </div>
      )}
    </div>
  );
}
