type Song = {
  original: "japanese" | "portuguese" | "english";
  name_japanese: string;
  name_romaji: string;
  name_english: string;
  artist_id: number;
  release_date: string;
  youtube: string;
  spotify: string;
  has_japanese: boolean;
  has_portuguese: boolean;
  has_english: boolean;
};

type Artist = {
  name_original: string;
  is_romaji: boolean;
  youtube: string;
  spotify: string;
};

type SongWithArtist = {
  [Property in keyof Omit<Song, "artist_id">]: Song[Property];
} & {
  artist: Artist;
};
