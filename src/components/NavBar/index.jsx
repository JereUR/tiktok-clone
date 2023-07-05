import { AddVideo } from '../Icons/AddVideo'

export default function NavBar() {
  const handleClick = () => {
    console.log('click')
    window.location.replace('/upload')
  }

  return (
    <div onClick={handleClick}>
      <AddVideo />
    </div>
  )
}
