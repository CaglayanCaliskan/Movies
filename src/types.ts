export type MovieType = {
  id: string;
  title: string;
  poster?: string;
  overview: string;
  release_date: number;
  genres: string[];
  button?: boolean;
};
