const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3000
const API_KEY = 'wg2Q11sN8mj1Ux0I3SgXNZOLhnM6ROXQ65S7qse5'

// middleware для обработки CORS
app.use(cors())

// Общий обработчик для маршрутов
const fetchData = async (req, res, endpoint) => {
  const { id } = req.params

  try {
    const fetchModule = await import('node-fetch')
    const fetch = fetchModule.default
    const url = `https://faceitanalyser.com/api/${endpoint}/${id}?key=${API_KEY}`
    const response = await fetch(url)
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error(`Error fetching ${endpoint} data:`, error)
    res.status(500).json({ error: `Failed to fetch ${endpoint} data` })
  }
}

app.get('/api/stats/:id', async (req, res) => {
  await fetchData(req, res, 'stats')
})

app.get('/api/maps/:id', async (req, res) => {
  await fetchData(req, res, 'maps')
})

app.get('/api/matches/:id', async (req, res) => {
  await fetchData(req, res, 'matches')
})

app.get('/api/names/:id', async (req, res) => {
  await fetchData(req, res, 'names')
})

app.get('/api/highlights/:id', async (req, res) => {
  await fetchData(req, res, 'highlights')
})

app.get('/api/playerGraphs/:id', async (req, res) => {
  await fetchData(req, res, 'playerGraphs')
})

// console
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
