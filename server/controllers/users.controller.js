const express = require('express')
const router = express.Router()
const authSvc = require('../services/auth.service')

router.post('/register', authSvc.register)

router.post('/login', authSvc.login)

module.exports = router