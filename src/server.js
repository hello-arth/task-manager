const express = require('express')
const path = require('path')
const router = require('./routes')
const app = express()

// Configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Configuração do encoder do form
app.use(express.urlencoded({ extended: true }))

// Configuração de arquivos estáticos
app.use(express.static('public'))

// Definição das rotas
app.use(router)

const PORT = process.env.PORT ?? 3000
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`))