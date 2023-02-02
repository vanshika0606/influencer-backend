const express= require("express")

const { Add, List, search, Sort, Update, Delete } = require("../controller/Influencer_controller")




const router= express.Router()

router.route("/add").post(Add)
router.route("/get").get(List)
router.route("/search").get(search)
router.route("/update/:id").put(Update)
router.route("/delete/:id").delete(Delete)


module.exports = router;