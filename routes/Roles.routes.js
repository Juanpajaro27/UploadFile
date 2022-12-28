const router = require("express").Router()
const {connection} = require("../database")
const {GetRoles,CreateRole} = require("../controllers/rolesController")

router.get('/',GetRoles)
router.post('/create/',CreateRole)

module.exports = router;