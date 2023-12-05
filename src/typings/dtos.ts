export interface booksType {
  id: number;
  author_id: number;
  genre_id: number;
  title: string;
  cover_image: string;
  pages: number;
  releaseDate: string;
  price: number;
  describe: string;
}

export interface authorType {
  id: number;
  name: string;
  description: string;
  cover_image: string;
}

export enum genreName {
  ScienceFiction = "Science Fiction",
  Romance = "Romance",
}

export interface genreType {
  id: number;
  name: genreName;
}

export interface booksProps {
  name: string;
  id: number;
  price: number;
  description: string;
  image: string;
}

export interface bookDetailsProps extends booksType {
  author: string;
  genre: string;
}
