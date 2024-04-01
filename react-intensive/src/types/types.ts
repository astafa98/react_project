export type FormRecord = Record<string, FormDataEntryValue>;

export interface Movie {
  id: number;
  status?: string | null;
  type: string;
  name: string | null;
  alterNativeName: string;
  rating: {
    kp: number;
    imdb: number;
  };
  description: string;
  year: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  genres: { name: string }[];
  countries: { name: string }[];
  typeNumber: number;
  backdrop: {
    url: string;
    previewUrl: string;
  };
  movieLength: number;
  shortDescription: string;
  ageRating: 18;
  logo: {
    url: string;
  };
  top10: number | null;
  top250: number | null;
  isSeries: boolean;
  seriesLength: number | null;
  totalSeriesLength: number | null;
}

export enum MovieTypes {
  Movie = 'movie',
  TvSeries = 'tv-series',
  Cartoon = 'cartoon',
}
