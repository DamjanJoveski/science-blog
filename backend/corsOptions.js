const allowedOrigins = require('./origins')
const {callback} = require("pg/lib/native/query");

const corsOptions = {
    origin: (origin, callback) => {
        if(allowedOrigins.indexOf(origin) !== -1){
            callback(null, true)
        }
        else{
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions