import { useEffect, useState } from 'react'
import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'
import { getVideos } from '../../services'

export default function FeedVideos() {
  const [videos, setVideos] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    getVideos().then(([error, videos]) => {
      if (error) return setError(error)
      setVideos(videos)
    })
  }, [])

  if (error) return <span>{error}</span>

  return videos.map((video) => {
    const { user } = video
    const { username, avatar } = user

    return (
      <div className={styles.item} key={video.id}>
        <VideoPlayer {...video} username={username} avatar={avatar} />
      </div>
    )
  })
}
