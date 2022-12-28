const router = require("express").Router()
const {signup,signin}= require("../controllers/AdminsController")

router.post('/create/',signup)
router.post('/signin/',signin);

module.exports = router