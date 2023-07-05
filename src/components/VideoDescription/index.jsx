import NavBar from '../NavBar'
import SongTicker from '../SongTicker'
import AlbumDisk from './AlbumDisk'
import styles from './styles.module.css'

export default function VideoDescription({
  username,
  description,
  albumCover,
  songTitle
}) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong>
            <a className={styles.author} href={`/user/${username}`}>
              {username}
            </a>
          </strong>
        </section>
        <section>
          <p className={styles.text}>{description}</p>
          <SongTicker songTitle={songTitle} />
        </section>
      </div>
      <div>
        <AlbumDisk albumCover={albumCover} className={styles.disk} />
      </div>
      <div className={styles.addVideo}>
        <NavBar />
      </div>
    </footer>
  )
}
