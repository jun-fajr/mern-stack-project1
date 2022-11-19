import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const PORT = 8000
const app = express()
app.use(cors())

await mongoose.connect('mongodb+srv://junfajr:210688@cluster0.jdihcq4.mongodb.net/?retryWrites=true&w=majority')
console.log('MongoDB connection is successful')

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(PORT, () => {
  console.log('Server running on port ' + PORT)
})
