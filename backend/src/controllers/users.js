// ------------------- Imports -------------------
// import db ORM
const Response = require('../domain/response');
const httpStatus = require('../domain/httpStatus');
const logger = require('../util/logger');
const db = require('../database/models/index');
const Users = db.User;


// ------------------- Controller CODE -------------------
const controller = {
    // '/users/' - Root show all users in DB
    index: (req,res) => {
        logger.info(`${req.method} ${req.originalUrl}, fetching users`);
        Users.findAll({
            include: [
                { association: 'notes'}
            ]
        })
            .then( users => {
                if (!users)
                    return res
                                .status(httpStatus.NOT_FOUND.code)
                                .send(
                                    new Response(
                                        httpStatus.NOT_FOUND.code,
                                        httpStatus.NOT_FOUND.status,
                                        "No users found"
                                    )
                                );
                else
                    return res
                                .status(httpStatus.OK.code)
                                .send(
                                    new Response(
                                        httpStatus.OK.code,
                                        httpStatus.OK.status, 
                                        "Users retrived", 
                                        { users: users }
                                    ) 
                                );
            })
            .catch( e => {
                logger.error(e.message);
                return res
                            .status( httpStatus.INTERNAL_SERVER_ERROR.code)
                            .send(
                                new Response(
                                    httpStatus.INTERNAL_SERVER_ERROR.code,
                                    httpStatus.INTERNAL_SERVER_ERROR.status,
                                    "Error",
                                    { error: e }
                                )
                            );
            });
    },
    // '/users/id' - Detail show the detail of the user id
    detail: (req,res) => {
        const ID = req.params.id;
        logger.info(`${req.method} ${req.originalUrl}, fetching user with id: ${ID}`);
        Users.findByPk(ID,{
            include: [
                { association: 'notes'}
            ]
        })
            .then( user => {
                if (!user) 
                    return res
                                .status(httpStatus.NOT_FOUND.code)
                                .send(
                                    new Response(
                                        httpStatus.NOT_FOUND.code,
                                        httpStatus.NOT_FOUND.status,
                                        "User not found"
                                    )
                                );
                else
                    return res 
                                .status(httpStatus.OK.code)
                                .send(
                                    new Response(
                                        httpStatus.OK.code,
                                        httpStatus.OK.status,
                                        "User retrived",
                                        { user: user }
                                    )
                                );
            })
            .catch( e => {
                logger.error(e.message);
                return res
                            .status( httpStatus.INTERNAL_SERVER_ERROR.code)
                            .send(
                                new Response(
                                    httpStatus.INTERNAL_SERVER_ERROR.code,
                                    httpStatus.INTERNAL_SERVER_ERROR.status,
                                    "Error",
                                    { error: e }
                                )
                            );
            } );
    },
    // '/users/search?usercode=searchstring' - Search for users with usercode
    search: (req,res) => {
        const usercode = req.query.usercode;
        logger.info(`${req.method} ${req.originalUrl}, fetching user with code '${usercode}'`);
        Users.findAll({
            where: {
                user_code: {
                    [db.Sequelize.Op.like]:`%${usercode}%`
                }
            },
            include: [
                {association: 'notes'},
            ]
        })
            .then( user => {
                console.log(user);
                if (user.length == 0 || !user)
                    return res
                                .status(httpStatus.NOT_FOUND.code)
                                .send(
                                    new Response(
                                        httpStatus.NOT_FOUND.code,
                                        httpStatus.NOT_FOUND.status,
                                        `No user found with '${usercode}'`
                                    )
                                );
                else
                    return res 
                                .status(httpStatus.OK.code)
                                .send(
                                    new Response(
                                        httpStatus.OK.code,
                                        httpStatus.OK.status,
                                        "User retrived",
                                        { user: user }
                                    )
                                );
            })
            .catch( e => {
                logger.error(e);
                return res
                            .status( httpStatus.INTERNAL_SERVER_ERROR.code)
                            .send(
                                new Response(
                                    httpStatus.INTERNAL_SERVER_ERROR.code,
                                    httpStatus.INTERNAL_SERVER_ERROR.status,
                                    "Error",
                                    { error: e }
                                )
                            );
            } );
    },
    // '/users/' - Method for saving a new user
    store: (req,res) => {
        const FORM = req.body;
        console.log(FORM);
        logger.info(`${req.method} ${req.originalUrl}, creating and storing user`);
        const newUser = {
            user_code: FORM.usercode
        }
        Users.create(newUser)
            .then( response => {
                if (!response)
                    return res
                                .status(httpStatus.INTERNAL_SERVER_ERROR.code)
                                .send(
                                    new Response(
                                        httpStatus.INTERNAL_SERVER_ERROR.code,
                                        httpStatus.INTERNAL_SERVER_ERROR.status,
                                        "Error creating registry"
                                    )
                                );
                else
                    return res
                                .status(httpStatus.CREATED.code)
                                .send(
                                    new Response(
                                        httpStatus.CREATED.code,
                                        httpStatus.CREATED.status,
                                        "User created",
                                        { user: newUser }
                                    )
                                );
            })
            .catch( e => {
                logger.error(e);
                return res
                            .status( httpStatus.INTERNAL_SERVER_ERROR.code)
                            .send(
                                new Response(
                                    httpStatus.INTERNAL_SERVER_ERROR.code,
                                    httpStatus.INTERNAL_SERVER_ERROR.status,
                                    "Error",
                                    { error: e }
                                )
                            );
            });
    },
    // '/users/id' - Method to delete the user id from DB
    destroy: (req,res) => {
        const ID = req.params.id;
        logger.info(`${req.method} ${req.originalUrl}, fetching user '${ID}'`);
        Users.destroy({
            where: {
                id: ID
            }
        })
            .then( response => {
                if (!response)
                    return res
                                .status(httpStatus.NOT_FOUND.code)
                                .send(
                                    new Response(
                                        httpStatus.NOT_FOUND.code,
                                        httpStatus.NOT_FOUND.status,
                                        `User with id '${ID}' was not found.`,
                                    )
                                );
                else{
                    logger.info(`${req.method} ${req.originalUrl}, deleting user '${ID}'`);
                    return res
                                .status(httpStatus.OK.code)
                                .send(
                                    new Response(
                                        httpStatus.OK.code,
                                        httpStatus.OK.status,
                                        `User with id: ${ID} deleted succesfully`
                                    )
                                );
                }
            })
            .catch( e => {
                logger.error(e);
                return res
                            .status( httpStatus.INTERNAL_SERVER_ERROR.code)
                            .send(
                                new Response(
                                    httpStatus.INTERNAL_SERVER_ERROR.code,
                                    httpStatus.INTERNAL_SERVER_ERROR.status,
                                    "Error deleting registry",
                                    { error: e }
                                )
                            );
            });
    },
};


// ------------------- Exports -------------------
module.exports = controller;