import Parser from 'rss-parser';

export interface Episode {
  id: string;
  title: string;
  content: string;
  pubDate: string;
  enclosure: {
    url: string;
    length: string;
    type: string;
  };
  itunes: {
    duration: string;
  };
}

export async function fetchRss(): Promise<Episode[]> {
  const parser = new Parser();
  const feed = await parser.parseURL('https://rss.art19.com/vancouverengineers');
  
  return feed.items.map((item, index) => ({
    id: item.guid || `episode-${index}`,
    title: item.title || '',
    content: item.content || '',
    pubDate: item.pubDate || '',
    enclosure: item.enclosure || { url: '', length: '', type: '' },
    itunes: {
      duration: item.itunes?.duration || '',
    },
  }));
}

