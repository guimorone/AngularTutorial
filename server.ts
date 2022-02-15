// Importing module
import express from 'express'
  
const app = express()
const PORT:Number=3000
  
// Handling GET / Request
app.get('/', (req, res) => {
    res.send('Welcome to typescript backend!')
})

app.listen(PORT, () => console.log('Server is running!'))