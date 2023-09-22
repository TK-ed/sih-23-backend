const express = require('express')
const {createDoc, getDocs, getBySpecialty} = require('../controllers/docCtrl')

const route = express.Router()

route.get('/', () => {
    console.log('working!!');
})

route.get('/docs', getDocs)

route.get('/:doc', getBySpecialty)

route.post('/post', createDoc)

module.exports = route