const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/data-vehicles-api', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log('Example app running!'))