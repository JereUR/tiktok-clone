import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'elchamoy_v',
    description: 'Diamantes pal frii🤣 ',
    likes: 123,
    shares: 213,
    comments: 34,
    song: 'Dusk Till Dawn(完整版) - 硬曲Music',
    albumCover:
      '//p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/bfa47750dbb34d31a21d8c479b6b9b7f~c5_200x200.jpeg',
    src: 'assets/videos/Ala ala ala 😼🤙🏿.mp4'
  },
  {
    id: 2,
    author: 'Crazy goat',
    description: 'Beeeeeeeeee',
    likes: 198,
    shares: 2313,
    comments: 794,
    song: 'Dusk Till Dawn(完整版) - 硬曲Music',
    albumCover:
      '//p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/bfa47750dbb34d31a21d8c479b6b9b7f~c5_200x200.jpeg',
    src: 'assets/videos/goat.mp4'
  }
]

export default function FeedVideos() {
  return VIDEOS.map((video) => {
    return (
      <div className={styles.item} key={video.id}>
        <VideoPlayer {...video} />
      </div>
    )
  })
}
