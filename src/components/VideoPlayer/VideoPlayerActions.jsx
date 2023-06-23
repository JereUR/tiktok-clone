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
  const handleLike = () => {
    alert('Like')
  }

  const handleComment = () => {
    alert('Comment')
  }

  const handleShare = () => {
    alert('Share')
  }

  return (
    <aside className={styles.actions}>
      <div className={styles.action} onClick={handleLike}>
        <Heart />
        <span title="like">{likes}</span>
      </div>
      <div className={styles.action} onClick={handleComment}>
        <Comment />
        <span title="comments">{comments}</span>
      </div>
      <div className={styles.action} onClick={handleShare}>
        <Share />
        <span title="shares">{shares}</span>
      </div>
    </aside>
  )
}
