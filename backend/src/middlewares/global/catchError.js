const createError = require('http-errors');

// ************ catch 404 and forward to error handler ************
function catchError(req,res,next){
  next(createError(404));
}

module.exports = catchError;