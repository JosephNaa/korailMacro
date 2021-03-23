import express from 'express'
import nunjucks from 'nunjucks'
import logger from 'morgan'
import bodyParser from 'body-parser'

const db = require('./models')

class App {
    public app : express.Application;


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


export default new App().app