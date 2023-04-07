import {NextFunction, Request, Response} from "express";
import {APIErrorResultType, FieldErrorType} from "./appTypes";

export const basicAuthGuardMiddleware = (req: Request, res: Response, next : NextFunction) => {
    if(req.headers.authorization){
        const encoded : string = req.headers.authorization.split(" ")[1]
        const encodeway = req.headers.authorization.split(" ")[0]
        const decoded : string = Buffer.from(encoded, 'base64').toString('utf8');
        if(decoded === "admin:qwerty" && encodeway === "Basic"){
            next()
        }else{
            res.sendStatus(401)
        }
    }else {
        res.sendStatus(401)
    }
}

export const createBlogBodyValidator = (req: Request, res: Response, next : NextFunction) => {
    let errorsList : APIErrorResultType = {errorsMessages : []}
    // validation of proper name
    if(!req.body.name){
        let error : FieldErrorType = {message : "no name prop in body", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(typeof  req.body.name !== "string"){
        let error : FieldErrorType = {message : "wrong type of name field of req.body(not string)", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(req.body.name.length > 15){
        let error : FieldErrorType = {message : "wrong length of name field of req.body(more than 15 characters)", field: "name"}
        errorsList.errorsMessages.push(error)
    }
    // validation of proper description
    if(!req.body.description){
        let error : FieldErrorType = {message : "no description prop in body", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(typeof  req.body.description !== "string"){
        let error : FieldErrorType = {message : "wrong type of description field of req.body(not string)", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(req.body.description.length > 500){
        let error : FieldErrorType = {message : "wrong length of description field of req.body(more than 500 characters)", field: "name"}
        errorsList.errorsMessages.push(error)
    }
    // validation of proper websiteUrl
    const httpRegExPattern = new RegExp("^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$")
    if(!req.body.websiteUrl){
        let error : FieldErrorType = {message : "no websiteUrl prop in body", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(typeof  req.body.websiteUrl !== "string"){
        let error : FieldErrorType = {message : "wrong type of websiteUrl field of req.body(not string)", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(req.body.websiteUrl.length > 100){
        let error : FieldErrorType = {message : "wrong length of websiteUrl field of req.body(more than 100 characters)", field: "name"}
        errorsList.errorsMessages.push(error)
    }else
        //checking through proper http regex pattern
        if(!httpRegExPattern.test(req.body.websiteUrl)){
            let error : FieldErrorType = {message : "No RegEx intersection", field: "name"}
        errorsList.errorsMessages.push(error)
    }
    if(!errorsList.errorsMessages.length){
        next()
    }else{
        res.status(400).send(errorsList)
    }
}
export const readBlogIDValidator = (req: Request, res: Response, next : NextFunction) => {
    let errorsList : APIErrorResultType = {errorsMessages : []}
    // validation of proper name
    if(!req.body.name){
        let error : FieldErrorType = {message : "no name prop in body", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(typeof  req.body.name !== "string"){
        let error : FieldErrorType = {message : "wrong type of name field of req.body(not string)", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(req.body.name.length > 15){
        let error : FieldErrorType = {message : "wrong length of name field of req.body(more than 15 characters)", field: "name"}
        errorsList.errorsMessages.push(error)
    }
    // validation of proper description
    if(!req.body.description){
        let error : FieldErrorType = {message : "no description prop in body", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(typeof  req.body.description !== "string"){
        let error : FieldErrorType = {message : "wrong type of description field of req.body(not string)", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(req.body.description.length > 500){
        let error : FieldErrorType = {message : "wrong length of description field of req.body(more than 500 characters)", field: "name"}
        errorsList.errorsMessages.push(error)
    }
    // validation of proper websiteUrl
    const httpRegExPattern = new RegExp("^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$")
    if(!req.body.websiteUrl){
        let error : FieldErrorType = {message : "no websiteUrl prop in body", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(typeof  req.body.websiteUrl !== "string"){
        let error : FieldErrorType = {message : "wrong type of websiteUrl field of req.body(not string)", field: "name"}
        errorsList.errorsMessages.push(error)
    }else if(req.body.websiteUrl.length > 100){
        let error : FieldErrorType = {message : "wrong length of websiteUrl field of req.body(more than 100 characters)", field: "name"}
        errorsList.errorsMessages.push(error)
    }else
        //checking through proper http regex pattern
    if(!httpRegExPattern.test(req.body.websiteUrl)){
        let error : FieldErrorType = {message : "No RegEx intersection", field: "name"}
        errorsList.errorsMessages.push(error)
    }
    if(!errorsList.errorsMessages.length){
        next()
    }else{
        res.status(400).send(errorsList)
    }
}