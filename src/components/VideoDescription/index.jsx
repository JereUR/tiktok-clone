import MusicIcon from '../Icons/MusicIcon'
import SongTicker from '../SongTicker'
import AlbumDisk from './AlbumDisk'
import styles from './styles.module.css'

export default function VideoDescription({
  author,
  description,
  albumCover,
  songTitle
}) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <strong>
          <a className={styles.author} href={`/user/${author}`}>
            {author}
          </a>
        </strong>
        <p className={styles.text}>{description}</p>
        <SongTicker songTitle={songTitle} />
      </div>
      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  )
}
