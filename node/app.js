const express = require('express')
const nunjucks = require('nunjucks')
const logger = require('morgan')
const bodyParser = require('body-parser')

const db = require('./models')

class App {
    constructor() {
        this.app = express()

        this.setViewEngine()

        this.setMiddleWare()

        this.getRouting()
    }

    setViewEngine() {
        nunjucks.configure('template', {
            autoescape: true,
            express: this.app
        })
    }

    setMiddleWare() {
        
        this.app.use(logger('dev'))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: false}))
    }

    getRouting() {
        this.app.use(require('./controllers'))
    }
}

module.exports = new App().app