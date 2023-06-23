import styles from './styles.module.css'

import { Heart } from '../Icons/Heart'
import { Comment } from '../Icons/Comment'
import { Share } from '../Icons/Share'

export default function VideoPlayerActions({
  likes = 3567,
  comments = 132,
  shares = 465,
  hearted = false
}) {
  return (
    <aside className={styles.actions}>
      <div className={styles.action}>
        <Heart />
        <strong title="like">{likes}</strong>
      </div>
      <div className={styles.action}>
        <Comment />
        <strong title="comments">{comments}</strong>
      </div>
      <div className={styles.action}>
        <Share />
        <strong title="shares">{shares}</strong>
      </div>
    </aside>
  )
}
