let express = require ('express')
let path = require('path')
let bordyParser = require ('body-parser')
let api_routes = require('./routes/api.js')


let app = express()
app.use(express.static(path.join(__dirname, 'client-sign-in-', 'dist')))

app.use(bordyParser.json())

app.use('/api', api_routes)

app.use(function(req, res, next){
    res.status(404).send('Not found')
})


app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})


let server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port', server.address().port )
})