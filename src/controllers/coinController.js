const CoinModel = require('../models/coinModel')
const axios = require('axios')

const coin = async (req, res) => {
      try {
            let key = req.headers.Authorization

            let docData = {
                  method: "Get",
                  url: "https://api.coincap.io/v2/assets",
                  headers: {
                        Authorization: `Bearer ${key}`
                  }
            }
            let result = await axios(docData)
            let arr = result.data.data
            let sortedArr = arr.sort((a, b) => a.changePercent24Hr - b.changePercent24Hr)

            await CoinModel.deleteMany()
            await CoinModel.insertMany(sortedArr)

            sortedArr.forEach(x => {delete x.explorer})

            return res.status(201).send({ status: true, data: sortedArr })
      }
      catch(err){
            return res.status(500).send({status:false, msg:err.message})
      }

}

module.exports.coin = coin