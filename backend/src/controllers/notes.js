// ------------------- Imports -------------------
// import db ORM
const Response = require('../domain/response');
const httpStatus = require('../domain/httpStatus');
const logger = require('../util/logger');
const db = require('../database/models/index');
const Notes = db.Note;


// ------------------- Controller CODE -------------------
const controller = {
    // '/notes/' - Root show all notes in DB
    index: (req,res) => {
        logger.info(`${req.method} ${req.originalUrl}, fetching notes`);
        Notes.findAll({
            include: [
                { association: 'user'}
            ]
        })
            .then( notes => {
                if (!notes)
                    return res
                                .status(httpStatus.NOT_FOUND.code)
                                .send(
                                    new Response(
                                        httpStatus.NOT_FOUND.code,
                                        httpStatus.NOT_FOUND.status,
                                        "No notes found"
                                    )
                                );
                else
                    return res
                                .status(httpStatus.OK.code)
                                .send(
                                    new Response(
                                        httpStatus.OK.code,
                                        httpStatus.OK.status, 
                                        "Notes retrived", 
                                        { notes: notes }
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
    // '/notes/id' - Detail show the detail of the product id
    detail: (req,res) => {
        const ID = req.params.id;
        logger.info(`${req.method} ${req.originalUrl}, fetching note with id: ${ID}`);
        Notes.findByPk(ID)
            .then( note => {
                if (!note) 
                    return res
                                .status(httpStatus.NOT_FOUND.code)
                                .send(
                                    new Response(
                                        httpStatus.NOT_FOUND.code,
                                        httpStatus.NOT_FOUND.status,
                                        "Note not found"
                                    )
                                );
                else
                    return res 
                                .status(httpStatus.OK.code)
                                .send(
                                    new Response(
                                        httpStatus.OK.code,
                                        httpStatus.OK.status,
                                        "Note retrived",
                                        { note: note }
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
    // '/notes/search?keywords=searchstring' - Search for notes with keywords
    search: (req,res) => {
        const KEYWORDS = req.query.keywords;
        logger.info(`${req.method} ${req.originalUrl}, fetching notes that contain '${KEYWORDS}'`);
        Notes.findAll({
            where: {
                title: {
                    [db.Sequelize.Op.like]:`%${KEYWORDS}%`
                }
            },
            include: [
                {association: 'user'},
            ]
        })
            .then( notes => {
                if (notes.length == 0 || !notes)
                    return res
                                .status(httpStatus.NOT_FOUND.code)
                                .send(
                                    new Response(
                                        httpStatus.NOT_FOUND.code,
                                        httpStatus.NOT_FOUND.status,
                                        `No notes found with '${KEYWORDS}'`
                                    )
                                );
                else
                    return res 
                                .status(httpStatus.OK.code)
                                .send(
                                    new Response(
                                        httpStatus.OK.code,
                                        httpStatus.OK.status,
                                        "Notes retrived",
                                        { notes: notes }
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
    // '/notes/' - Method for saving the new note
    store: (req,res) => {
        const FORM = req.body;
        logger.info(`${req.method} ${req.originalUrl}, creating note`);
        const newNote = {
            title: FORM.title,
            content: FORM.content,
            user_id: FORM.userid
        }
        Notes.create(newNote)
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
                                        "Note created",
                                        { note: newNote }
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
    // '/notes/id' - Method to edit note id
    update: (req,res) => {
        const ID = req.params.id;
        const FORM = req.body;
        logger.info(`${req.method} ${req.originalUrl}, fetching note '${ID}'`);
        const newNote = {
            title: FORM.title,
            content: FORM.content,
            user_id: FORM.userid
        }
        Notes.update( newNote, {
            where: {
                id: ID
            }
        })
            .then( response => {
                if (!response[0])
                    return res
                                .status(httpStatus.NOT_FOUND.code)
                                .send(
                                    new Response(
                                        httpStatus.NOT_FOUND.code,
                                        httpStatus.NOT_FOUND.status,
                                        `Note with id '${ID}' was not found.`,
                                    )
                                );
                else{
                    logger.info(`${req.method} ${req.originalUrl}, updating note '${ID}'`);
                    return res
                                .status(httpStatus.OK.code)
                                .send(
                                    new Response(
                                        httpStatus.OK.code,
                                        httpStatus.OK.status,
                                        `Note with id: ${ID} updated succesfully`,
                                        { note: newNote }
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
                                    "Error editing registry",
                                    { error: e }
                                )
                            );
            });
    },
    // '/notes/id' - Method to delete the note id from DB
    destroy: (req,res) => {
        const ID = req.params.id;
        logger.info(`${req.method} ${req.originalUrl}, fetching note '${ID}'`);
        Notes.destroy({
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
                                        `Note with id '${ID}' was not found.`,
                                    )
                                );
                else{
                    logger.info(`${req.method} ${req.originalUrl}, deleting note '${ID}'`);
                    return res
                                .status(httpStatus.OK.code)
                                .send(
                                    new Response(
                                        httpStatus.OK.code,
                                        httpStatus.OK.status,
                                        `Note with id: ${ID} deleted succesfully`
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