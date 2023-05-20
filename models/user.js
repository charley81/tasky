import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exist'],
    required: [true, 'Email is required']
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    match: [
      /^(?!.*(.).*\1)[A-Za-z0-9]{8,20}$/,
      'Username invalid, it should contain 8-20 alphameric letters and be unique'
    ]
  },
  image: {
    type: String
  }
})

const User = models.User || model('User', UserSchema)
export default User