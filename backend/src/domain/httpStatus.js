const httpStatus = {
    OK: {
        code: 200,
        status: "OK"
    },
    CREATED: {
        code: 201,
        status: "CREATED"
    },
    NO_CONTENT: {
        code: 204,
        status: "NO_CONTENT"
    },
    BAD_REQUEST: {
        code: 400,
        status: "BAD_REQUEST"
    },
    NOT_FOUND: {
        code: 404,
        status: "NOT_FOUND"
    },
    INTERNAL_SERVER_ERROR: {
        code: 500,
        status: "INTERNAL_SERVER_ERROR"
    },
};

module.exports = httpStatus;
