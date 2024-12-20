import { Episode } from './fetchRss';
import { htmlToPlainText } from './htmlToPlainText';

// Extract guest name from episode content
function extractGuest(content: string): string | null {
  const match = content.match(/(.+?)さんをゲストに迎えて/);
  return match ? match[1] : null;
}

// Calculate content similarity using simple word overlap
function calculateContentSimilarity(content1: string, content2: string): number {
  const words1 = new Set(content1.split(/\s+/));
  const words2 = new Set(content2.split(/\s+/));
  const intersection = new Set([...words1].filter(x => words2.has(x)));
  return intersection.size / Math.max(words1.size, words2.size);
}

// Find related episodes
export function findRelatedEpisodes(
  currentEpisode: Episode,
  allEpisodes: Episode[],
  count: number = 4
): Episode[] {
  const currentGuest = extractGuest(currentEpisode.content);
  const plainCurrentContent = htmlToPlainText(currentEpisode.content);

  // Score each episode
  const scoredEpisodes = allEpisodes
    .filter(ep => ep.id !== currentEpisode.id)
    .map(ep => {
      const guest = extractGuest(ep.content);
      const plainContent = htmlToPlainText(ep.content);
      const sameGuest = currentGuest && guest && currentGuest === guest;
      const similarity = calculateContentSimilarity(plainCurrentContent, plainContent);

      return {
        episode: ep,
        score: (sameGuest ? 1 : 0) + similarity
      };
    });

  // Sort by score and take top N
  return scoredEpisodes
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(item => item.episode);
}
