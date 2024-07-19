require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('Itsraj786@iul')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login at chai and code</h1>')
})
app.get('/Youtube',(req,res)=>{
    res.send('<h2>Chai Aur Code</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
