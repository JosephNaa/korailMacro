const app = require('./app.js')
const port = 3040

app.listen(port, () => {
    console.log('Express listening on port', port)
})