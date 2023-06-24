import styles from './styles.module.css'
import clsx from 'clsx'

import { useState, useRef } from 'react'
import VideoPlayerActions from './VideoPlayerActions'
import VideoDescription from '../VideoDescription'

export default function VideoPlayer({ albumCover, author, description, src }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    const { current: videoEl } = video
    playing ? videoEl.pause() : videoEl.play()

    setPlaying(!playing)
  }

  const playerClassName = clsx(styles.player, { [styles.hidden]: playing })

  return (
    <div className={styles.wrapper}>
      <video
        className={styles.video}
        controls={false}
        loop
        onClick={handlePlay}
        ref={video}
        src={src}
      />
      <i className={playerClassName} onClick={handlePlay} />
      <VideoPlayerActions />
      <VideoDescription
        albumCover={albumCover}
        author={author}
        description={description}
      />
    </div>
  )
}
