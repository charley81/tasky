import { Schema, model, models } from 'mongoose'

const TaskSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  task: {
    type: String,
    required: [true, 'Task is required']
  },
  tag: {
    type: String,
    required: [true]
  }
})

const Task = models.Task || model('Task', TaskSchema)
export default Task
