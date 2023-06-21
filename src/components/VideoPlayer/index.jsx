import styles from './styles.module.css'

import SRC from '../../assets/videos/Ala ala ala 😼🤙🏿.mp4'
import { useEffect, useRef } from 'react'
import { useState } from 'react'

export default function VideoPlayer() {
  const [playing, setPlaying] = useState(false)
  const video = useRef()

  const handlePlay = () => {
    if (playing) {
      video.current.pause()
    } else {
      video.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div>
      <video className={styles.video} src={SRC} controls={false} ref={video} />
      <button className={styles.player} onClick={handlePlay}></button>
    </div>
  )
}
