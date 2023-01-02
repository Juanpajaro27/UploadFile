const router = require("express").Router()
const {GetUsers,GetUserById,CreateUser,DeleteUser,GetFilter,GetContByGender,UserByGender} = require("../controllers/UserController")

router.get('/',GetUsers)
router.get('/:id',GetUserById)
router.get('/filter/',GetFilter)
router.get('/filters/',GetContByGender)
router.get('/GenderFilter/',UserByGender)
router.post('/create/',CreateUser)
router.delete('/delete/:id',DeleteUser)

module.exports = router;