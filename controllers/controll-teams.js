const { isObjectIdOrHexString } = require('mongoose')
const teams = require('./../models/teams')


module.exports = {
    findAll: async (req,res) => {
        try{
            const result = await teams.find()

            return res.status(200).json({data:result})
        }catch(err){
            return res.status(500).json({err:err})
          }
},

    findById : async( req,res )=>{
        
        const {id} = req.params
        try{
                const result = await teams.findById(id)

                 return res.status(200).json({data:result})
         }catch(err){
              return res.status(500).json({error:err})
          }
  },


}
