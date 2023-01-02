const router = require("express").Router()
const {CreateSons,GetSons,GetSonsById,DeleteSons,GetGenders} = require("../controllers/SonsController")

router.get('/',GetSons)
router.get('/:id',GetSonsById)
router.post('/create/',CreateSons)
router.delete('/delete/:id',DeleteSons)
router.get('/gender/',GetGenders)

module.exports = router;