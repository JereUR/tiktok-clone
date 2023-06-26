import Marquee from 'react-fast-marquee'

import MusicIcon from '../Icons/MusicIcon'
import styles from './styles.module.css'

export default function SongTicker({ songTitle }) {
  return (
    <div className={styles.song}>
      <MusicIcon />
      <Marquee speed={100} gradient={false}>
        {songTitle}
      </Marquee>
    </div>
  )
}
