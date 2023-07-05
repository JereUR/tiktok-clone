import { AddVideo } from '../Icons/AddVideo'

export default function NavBar() {
  const handleClick = () => {
    window.location.replace('/upload')
  }

  return (
    <div onClick={handleClick}>
      <AddVideo />
    </div>
  )
}
