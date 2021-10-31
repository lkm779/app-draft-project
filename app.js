const express= require('express');
const app= express();
const morgan= require('morgan');
const bodyParser= require('body-parser');


const trackRoutes= require('./api/routes/tracks');
const genresRoutes= require('./api/routes/genres');
const artistsRoutes= require('./api/routes/artists');
const albumsRoutes= require('./api/routes/albums');

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

app.use('/albums', albumsRoutes);
app.use('/artists', artistsRoutes);
app.use('/genres', genresRoutes);
app.use('/tracks', trackRoutes);

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