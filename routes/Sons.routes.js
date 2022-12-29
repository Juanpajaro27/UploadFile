const router = require("express").Router()
const {CreateSons,GetSons,GetSonsById,DeleteSons,GetScholarship, GetGender} = require("../controllers/SonsController")

router.get('/',GetSons)
router.get('/:id',GetSonsById)
router.post('/create/',CreateSons)
router.delete('/delete/:id',DeleteSons)
router.get('/genders/',GetGender)
router.get('/scholarship/',GetScholarship)
router.get('/age/')
module.exports = router;