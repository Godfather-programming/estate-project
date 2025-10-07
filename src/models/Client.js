import { Schema, model, models } from "mongoose"


const clientSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  // repeatedPassword: {
  //   type: String,
  //   required: true,
  // },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  }  
})

const Client = models?.Client || model("Client", clientSchema)

export default Client