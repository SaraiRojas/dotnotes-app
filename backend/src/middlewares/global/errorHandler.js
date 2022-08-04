const httpStatus = require("../../domain/httpStatus");
const Response = require("../../domain/response");

// ************ error handler ************
function errorHandler(err, req,res,next) {
    res.locals.message = err.message;
    res.locals.path = req.path;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    
    // render the error page
    res
        .status(err.status || httpStatus.INTERNAL_SERVER_ERROR.code)
        .send(
            new Response(
                httpStatus.INTERNAL_SERVER_ERROR.code,
                httpStatus.INTERNAL_SERVER_ERROR.status,
                "Error"
            )
        );
}

module.exports = errorHandler;