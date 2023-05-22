'use client'
import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Form from '@/components/form'

const CreateTaskPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [taskObj, setTaskObj] = useState({ task: '', tag: '' })

  const createTask = async e => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          task: taskObj.task,
          tag: taskObj.tag,
          userId: session?.user.id
        })
      })

      if (response.ok) {
        router.push('/')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const router = useRouter()
  const { data: session } = useSession()

  return (
    <Form
      type="create"
      taskObj={taskObj}
      setTask={setTaskObj}
      submitting={isSubmitting}
      handleSubmit={createTask}
    />
  )
}
export default CreateTaskPage
