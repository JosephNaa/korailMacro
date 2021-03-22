const {Router} = require('express')
const router = Router()
const ctrl = require('./home.ctrl')

router.get('/', ctrl.index)
router.get('/search', ctrl.get_search)
router.post('/login', ctrl.post_login)
router.get('/login', ctrl.get_login)

module.exports = router