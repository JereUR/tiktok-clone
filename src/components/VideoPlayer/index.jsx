import styles from './styles.module.css'

import SRC from '../../assets/videos/Ala ala ala 😼🤙🏿.mp4'

export default function VideoPlayer() {
  return <video className={styles.video} src={SRC}></video>
}
