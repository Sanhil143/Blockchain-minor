const mongoose = require('mongoose')

const cryptoSchema = new mongoose.Schema({
      symbol:{
            type:String,
            unique:true
      },
      name:{
            type:String,
            unique:true
      },
      marketCapUsd:String,
      priceUsd:String
},{timestamps:true})


module.exports = mongoose.model('crypto-Coin', cryptoSchema)






// The schema should have the following 4 keys:
//  {  "symbol" // String and Unique
//     "name": // String and Unique
//     "marketCapUsd": // String  ( not Number)
//      "priceUsd": //String
//    }