const router = require("express").Router()
const {connection} = require("../database")
const {CreateSons,GetSons,GetSonsById,DeleteSons} = require("../controllers/SonsController")

//Basics
router.get('/',GetSons)
router.get('/:id',GetSonsById)
router.post('/create/',CreateSons)
router.delete('/delete/:id',DeleteSons)

//Filters
module.exports = router;