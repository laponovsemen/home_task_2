import express, {Request, Response} from "express";


export const startRouter = express.Router()

startRouter.get("", (req: Request, res: Response) => {
    res.status(200).send("API started")
})