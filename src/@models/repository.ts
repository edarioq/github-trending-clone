export interface Repository {
  rank: number;
  username: string;
  repositoryName: string;
  url: string;
  description: string;
  language: string;
  languageColor: string;
  totalStars: number;
  forks: number;
  starsSince: number;
  since: string;
  builtBy: User[];
}

export interface User {
  username: string;
  url: string;
  avatar: string;
}
