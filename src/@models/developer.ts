export interface Developer {
  rank: number;
  username: string;
  name: string;
  ur: string;
  avatar: string;
  since: string;
  popularRepository: PopularRepository;
}

export interface PopularRepository {
  respositoryName: string;
  description: string;
  url: string;
}
