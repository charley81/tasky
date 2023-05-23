import Image from 'next/image'

const ListItem = ({ post }) => {
  return (
    <div>
      <div>
        <h3>{post.creator.username}</h3>
        <Image
          src={post.creator.image}
          alt={'profile image'}
          height={40}
          width={40}
          className="rounded-full"
        />
      </div>
      <div>
        <p>{post.task}</p>
        <p>{post.tag}</p>
      </div>
    </div>
  )
}
export default ListItem
