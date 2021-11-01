const express= require('express');
const app= express();
const morgan= require('morgan');
const bodyParser= require('body-parser');
const mongoose =require('mongoose');


const trackRoutes= require('./api/routes/tracks');
const genreRoutes= require('./api/routes/genres');
const artistRoutes= require('./api/routes/artists');
const albumRoutes= require('./api/routes/albums');
const userRoutes = require('./api/routes/user');

mongoose.connect('mongodb+srv://lkm779:sR59rAUQq.kNq%G@cluster0.hw5pq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

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