import "./style.css";
import { promises as fs } from "fs";

async function getSongWithArtist(songId: number): Promise<SongWithArtist> {
  const songFile = await fs.readFile(
    `${process.cwd()}/data/songs/${songId}/data.json`,
    "utf8",
  );
  const song: Song = JSON.parse(songFile);

  const artistFile = await fs.readFile(
    `${process.cwd()}/data/artists/${song.artist_id}/data.json`,
    "utf8",
  );

  const artist: Artist = JSON.parse(artistFile);

  return {
    artist: artist,
    ...song,
  };
}

async function getLyrics(songId: number): Promise<string[]> {
  const lyricsFile = await fs.readFile(
    `${process.cwd()}/data/songs/${songId}/japanese.md`,
  );

  return lyricsFile.toString("utf-8").split("\n");
}

export default async function Page({ params }: { params: { songId: number } }) {
  const songWithArtist = await getSongWithArtist(params.songId);
  const lyrics = await getLyrics(params.songId);

  return (
    <>
      <main className="song-page-main-wrapper">
        <h2 className="song-page-title text-center">
          {songWithArtist.name_japanese + (songWithArtist.name_romaji
            ? ` (${songWithArtist.name_romaji})`
            : "")}
        </h2>

        <h2 className="song-page-artist-name">
          {songWithArtist.artist.name_original}
        </h2>

        <div className="song-page-lyrics-wrapper">
          {lyrics.map((line) => (
            <p className="song-page-lyrics-line">{line}</p>
          ))}
        </div>
      </main>
    </>
  );
}
