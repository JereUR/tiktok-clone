import styles from './styles.module.css'
import clsx from 'clsx'

import { useRef } from 'react'
import VideoPlayerActions from './VideoPlayerActions'
import VideoDescription from '../VideoDescription'
import useIntersectionVideoPlayer from '../../hooks/useIntersectionVideoPlayer'

export default function VideoPlayer({
  albumCover,
  username,
  avatar,
  description,
  src,
  songTitle
}) {
  const video = useRef(null)
  const { playing, handlePlay } = useIntersectionVideoPlayer({ video })
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
      <VideoPlayerActions username={username} avatar={avatar} />
      <VideoDescription
        albumCover={albumCover}
        username={username}
        description={description}
        songTitle={songTitle}
      />
    </div>
  )
}
