import express, {Request, Response} from "express";


const startRouter = express.Router()

startRouter.get("", (req: Request, res: Response) => {
    res.status(200).send("API started")
})