const express = require('express')
const CoinController = require('../controllers/coinController')
const router = express.Router()



router.get("/testApi", (req, res) => {
      return res
            .status(200)
            .send({ message: "everything is good Sanhil, please start your work" })
})

router.get("/assets", CoinController.coin)

module.exports = router