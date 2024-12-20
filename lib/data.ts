export interface Episode {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  duration: string;
}

export const episodes: Episode[] = [
  {
    id: '1',
    title: 'The Future of AI',
    description: 'In this episode, we discuss the potential impacts of artificial intelligence on society and the job market.',
    publishDate: '2023-06-01',
    duration: '45:30',
  },
  {
    id: '2',
    title: 'Sustainable Energy Solutions',
    description: 'We explore various sustainable energy solutions and their potential to combat climate change.',
    publishDate: '2023-06-15',
    duration: '38:45',
  },
  {
    id: '3',
    title: 'The Art of Productivity',
    description: 'Learn effective techniques to boost your productivity and achieve your goals faster.',
    publishDate: '2023-07-01',
    duration: '42:15',
  },
];

