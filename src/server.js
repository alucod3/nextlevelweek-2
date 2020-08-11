// Server
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

// Set up nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// Start and configuration of server
server
// Receive datas of req.body
.use(express.urlencoded({ extended: true }))
// Set up files (css, scripts, images)
.use(express.static("public"))

// Rote of application
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Starting server
.listen(5500)