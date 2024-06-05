const routes = require('express').Router()

const{
    findAll,
    findById
    
}=require('./../controllers/controll-teams')

routes.get('/',findAll)
routes.get('/:id',findById)


module.exports = routes;
