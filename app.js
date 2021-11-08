const express= require('express');
const app= express();
const morgan= require('morgan');
const bodyParser= require('body-parser');
const mongoose =require('mongoose');
const swaggerUi= require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const options = {
    explorer: true
  };

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));





const url = 'mongodb://127.0.0.1:27017/import_db'





const MONGODB_URI='mongodb+srv://lkm779:1234.@cluster0.hw5pq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(url|| MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

const db = mongoose.connection;

mongoose.connection.on('connected',  ()=>{
    console.log('Mongoose is conected!!!');
});

const trackRoutes= require('./api/routes/tracks');
const genreRoutes= require('./api/routes/genres');
const artistRoutes= require('./api/routes/artists');
const albumRoutes= require('./api/routes/albums');
const userRoutes = require('./api/routes/user');



app.use(morgan('short'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Acces-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method ==='OPTIONS'){
        res.header( 'Access-Control-Allow-Methods', 'GET, POST');
        return res.status('200').json({});

    }
    next();
});

//POTENTIAL ROUTES TO HANDLE REQUESTS

app.use('/albums', albumRoutes);
app.use('/artists', artistRoutes);
app.use('/genres', genreRoutes);
app.use('/tracks', trackRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;