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
        <section>
          <strong>
            <a className={styles.author} href={`/user/${author}`}>
              {author}
            </a>
          </strong>
        </section>
        <section>
          <p className={styles.text}>{description}</p>
          <SongTicker songTitle={songTitle} />
        </section>
      </div>
      <div>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  )
}
