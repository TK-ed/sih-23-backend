const express = require('express')
const cors=require('cors')
const {getall,registerUser,loginUser,getProfile}=require('../controllers/authController')
const {createDoc, getDocs, getBySpecialty} = require('../controllers/docCtrl')

const route = express.Router()

route.use(cors({
    credentials:true,
    origin:'http://localhost:3000'
}))

// router.get('/',test);
route.post('/register',registerUser) 
route.post('/login',loginUser)
route.get('/profile',getProfile)
route.get('/getall',getall)

route.get('/', () => {
    console.log('working!!');
})

route.get('/docs', getDocs)

route.get('/:doc', getBySpecialty)

route.post('/post', createDoc)

module.exports = route