import Task from '@/models/task'
import { connectDB } from '@/utils/database'

export const POST = async (req, res) => {
  const { userId, task, tag } = await req.json()

  try {
    await connectDB()
    const newTask = new Task({ creator: userId, task, tag })
    await newTask.save()
    return new Response(JSON.stringify(newTask), { status: 201 })
  } catch (error) {
    return new Response('Failed to create a new task', { status: 500 })
  }
}
