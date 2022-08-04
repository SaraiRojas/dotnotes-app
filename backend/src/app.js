// ------------------- Import's -------------------
const path = require('path');
const express = require('express');
const methodOverride = require('method-override');
// const morgan = require('morgan');


// ------------------- APP -------------------
const app = express();

// ------------------- Middlewares -------------------
app.use( express.urlencoded({extended:false}) );
app.use( express.json() );
app.use( methodOverride('_method') );
// app.use( morgan('dev') );


// ------------------- Template Engine -------------------


// ------------------- Main CODE -------------------

// **** Routes Handler ****
// Routes Import's
const NotesRoutes = require('./routes/notes');
const UsersRoutes = require('./routes/users');

app.use('/notes', NotesRoutes);
app.use('/users', UsersRoutes);


// **** Error Handler ****
// Error Import's
const catchError = require('./middlewares/global/catchError');
const errorHandler = require('./middlewares/global/errorHandler');

app.use(catchError);
app.use(errorHandler);

// ------------------- Exports -------------------
module.exports = app;
