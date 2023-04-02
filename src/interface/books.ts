export interface IBook {
  id: number;
  title: string;
  cover: string;
  lastChapter: ILastChapter[];
  url: string;
  genre: string[];
  rating: number;
}

interface ILastChapter {
  chapterTitle: string;
  linkToChapter: string;
}
