import {Request, Response, Router} from "express";
import {
    createBlog,
    deleteAllBlogsData,
    deleteBlogByID,
    getAllBlogs,
    readBlogByID
} from "./repositiries/blogsRepository";
import {deleteAllPostsData} from "./repositiries/postsRepository";
import {basicAuthGuardMiddleware, createBlogBodyValidator, readBlogIDValidator} from "./middleware";


export const startRouter = Router({})
export const blogsRouter = Router({})
export const postsRouter = Router({})
export const testingRouter = Router({})
startRouter.get("/", (req: Request, res: Response) => {
    res.status(200).send("API started")
})

blogsRouter.get("/",(req: Request, res: Response) => {
    const result = getAllBlogs()
    res.status(200).send(result)
})

blogsRouter.post("/",
    basicAuthGuardMiddleware,
    createBlogBodyValidator,
    (req: Request, res: Response) => {
        const result = createBlog(req.body)
        res.send(result).status(200)
})

blogsRouter.get("/:id", (req: Request, res: Response) => {
    const result = readBlogByID(req.params.id)
    if(result){
        res.status(200).send(result)
    }else{
        res.sendStatus(404)
    }
})

blogsRouter.put("/:id",
    basicAuthGuardMiddleware,
    readBlogIDValidator,
    (req: Request, res: Response) => {
    const result = readBlogByID(req.params.id.toString())
        if(result){
            res.status(200).send(result)
        }else{
            res.sendStatus(404)
        }
})

blogsRouter.delete("/:id",basicAuthGuardMiddleware, (req: Request, res: Response) => {
    const result = deleteBlogByID(req.params.id.toString())
    if(result){

        res.status(204).send(result)
    }else{
        res.sendStatus(404)
    }
})


postsRouter.get("/", (req: Request, res: Response) => {

})

postsRouter.post("/",basicAuthGuardMiddleware, (req: Request, res: Response) => {

})

postsRouter.get("/:id", (req: Request, res: Response) => {

})

postsRouter.put("/:id", basicAuthGuardMiddleware,(req: Request, res: Response) => {

})

postsRouter.delete("/:id", basicAuthGuardMiddleware,(req: Request, res: Response) => {

})

testingRouter.delete("/", (req: Request, res: Response) => {
    deleteAllBlogsData()
    deleteAllPostsData()
    res.sendStatus(204)
})