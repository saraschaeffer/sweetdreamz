const { default: axios } = require('axios');
const express = require('express')
const app = express()
const port = 3000

app.get('/dreams', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/dreams/:id', (req, res) => {
  res.status(200).send('Successful get dreams ID request')
})

app.get('/people', (req, res) => {
  res.status(200).send('Successful get dreams people request')
})

app.post('/dreams', (req, res) => {
  res.status(201).send('Dream successfully added')
})
