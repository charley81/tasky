'use client'
import { useState, useEffect } from 'react'

import ListItem from './list-item'

const List = () => {
  const [posts, setPosts] = useState([])
  const [searchTerm, setSearchTerm] = useState()

  const fetchPosts = async () => {
    const response = await fetch('/api/posts')
    const data = await response.json()
    setPosts(data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div>
      {posts.map(post => (
        <ListItem key={post._id} post={post} />
      ))}
    </div>
  )
}
export default List
