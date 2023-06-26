import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: 'elchamoy_v',
    description:
      'Diamantes pal frii🤣 #Parati #Ala #VengaPaCa #FreeFire #Diamantes',
    likes: 123,
    shares: 213,
    comments: 34,
    songTitle: 'Dusk Till Dawn(完整版) - 硬曲Music',
    albumCover:
      '//p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/bfa47750dbb34d31a21d8c479b6b9b7f~c5_200x200.jpeg',
    src: 'assets/videos/Ala ala ala 😼🤙🏿.mp4'
  },
  {
    id: 2,
    author: 'Crazy goat',
    description: 'Beeeeeeeeee #GOAT #Beeeee #LOL #Funny #Cute',
    likes: 198,
    shares: 2313,
    comments: 794,
    songTitle: 'La Kabra - The Farmlopez',
    albumCover:
      '//p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/488ba59d88d74de49ed9ecc977caf79f~c5_200x200.jpeg',
    src: 'assets/videos/goat.mp4'
  },
  {
    id: 3,
    author: 'JereUR',
    description:
      'Demostración de como hacer un juego #GamerEnTikTok #GaminOnTikTok #GeekTok #Viewfinder #Tasher',
    likes: 198,
    shares: 2313,
    comments: 794,
    songTitle: ' Im Peppa Pig - Peppa Pig',
    albumCover:
      '//p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/fe5ae823f2cb4ebcab7e5432eaa605ee~c5_200x200.jpeg',
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
