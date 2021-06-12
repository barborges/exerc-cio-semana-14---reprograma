require('dotenv').config()
const mongoose = require('mongoose') //importando mongoose p utilizar os metodos dele

const connect = () =>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopoLogy: true
    })
    .then(console.log('Database conectada com sucesso!'))
    .catch(err => console.err)
}

module.exports = { connect } 

