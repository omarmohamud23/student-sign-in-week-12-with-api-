let express  = require ('express')
let db = require('../models')
let Sequelize = require('sequelize')
const { sequelize } = require('../models')

let Student  = db.Student

let router = express.Router()

router.get('/students', function(req, res, next){
    Student.findAll({ order: ['name'] }).then(students => {
        return res.json(students)
    })
    .catch( err => next (err))

})


router.post('/students', function(req, res, next){
    Student.create( req.body ).then( data => {
        return res.status(201).send('ok')
    }).catch ( err => {
        if ( err instanceof sequelize.ValidationError) {
            let messages = err.errors.map (e=>e.message)
            return res.status(500).json(messages)
        }
        return next(err)
    })
})

router.patch('/students/:id', function(req, res, next) {

    Student.update(req.body, { where: { id: req.params.id } })
        .then( rowModified => {
            return res.send('ok')
        })

})

router.delete('/students/:id', function(req, res, next){
    Student.destroy({where: {id: req.params.id}})
        .then( rowModified => {
            return res.send('ok')
        })
})

module.exports = router 