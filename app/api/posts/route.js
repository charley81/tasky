import Task from '@/models/task'
import { connectDB } from '@/utils/database'

export const GET = async (req, res) => {
  try {
    await connectDB()
    const posts = await Task.find({}).populate('creator')
    return new Response(JSON.stringify(posts), { status: 200 })
  } catch (error) {
    return new Response('Failed to fetch all posts', { status: 500 })
  }
}
