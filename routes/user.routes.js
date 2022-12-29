const router = require("express").Router()
const {connection} = require("../database")
const {GetUsers,GetUserById,CreateUser,DeleteUser,GetUserFiltered,GetContByGender,UserByGender} = require("../controllers/UserController")

router.get('/user/',GetUsers)
router.get('/user/:id',GetUserById)
router.post('/user/create',CreateUser)
router.delete('/user/delete/:id',DeleteUser)
router.get('/filter/',GetUserFiltered)
router.get('/filters/',GetContByGender)
router.get('/GenderFilter',UserByGender)

module.exports = router;