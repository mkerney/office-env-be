require('dotenv').config();

const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const sequelize = require('sequelize');
const allRoutesHandler = require('./routes/index');


// Cross origin
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    exposedHeaders: ['token', 'tokenValidityDays'],
    // add the exposed headers here
}));


app.use(cookieParser());
// Body parser and cookie parser initialization
app.use(bodyParser.json());


app.use('/api', allRoutesHandler);


// Error handler

app.use((error, req, res, next) => {
    if (error instanceof sequelize.ValidationError) {
        res.json({
            error: error.errors[0].message,
        });
    } else {
        if (error.name === 'JsonWebTokenError') {
            res.status(401).json({
                error: error.message,
            });
        } else {
            res.json({
                error: error.message || error,
            });
        }
    }
});

// Server port
app.listen(process.env.PORT, () => {
    console.log('started'); // eslint-disable-line no-console
});
