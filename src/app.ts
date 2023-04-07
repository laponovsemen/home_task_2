import {Request, Response, Router} from "express";
import {
    blogs,
    createBlog,
    deleteAllBlogsData,
    deleteBlogByID,
    getAllBlogs,
    readBlogByID
} from "./repositiries/blogsRepository";
import {createPosts, deleteAllPostsData, getAllPosts, posts, readPostByID} from "./repositiries/postsRepository";
import {
    basicAuthGuardMiddleware,
    createBlogBodyValidator,
    createPostBodyValidator,
    readBlogIDValidator
} from "./middleware";


export const startRouter = Router({})
export const blogsRouter = Router({})
export const postsRouter = Router({})
export const testingRouter = Router({})
//BLOG  LOGIC
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
            const index = blogs.indexOf(result)
            blogs[index].name = req.body.name
            blogs[index].description = req.body.description
            blogs[index].websiteUrl = req.body.websiteUrl
            res.status(204).send(blogs[index])
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

//POST LOGIC
postsRouter.get("/", (req: Request, res: Response) => {
    const result = getAllPosts()
    res.send(result).status(204)
})

postsRouter.post("/",basicAuthGuardMiddleware,createPostBodyValidator , (req: Request, res: Response) => {
    const result = createPosts(req.body)
    res.status(201).send(result)
})

postsRouter.get("/:id", (req: Request, res: Response) => {
    const result = readPostByID(req.params.id)
    if(result){
        res.status(200).send(result)
    } else {
        res.sendStatus(404)
    }
})

postsRouter.put("/:id", basicAuthGuardMiddleware,createPostBodyValidator ,(req: Request, res: Response) => {
    // coderewue
    const post  = posts.filter(x => x.id === req.params.id)[0]
    const indexOfPost = posts.indexOf(post)
    if(post){
        posts[indexOfPost].title = req.body.title
        posts[indexOfPost].shortDescription = req.body.shortDescription
        posts[indexOfPost].content = req.body.content
        posts[indexOfPost].blogId = req.body.blogId
        res.status(204).send(posts[indexOfPost])
    } else {
        res.sendStatus(404)
    }
})

postsRouter.delete("/:id", basicAuthGuardMiddleware,(req: Request, res: Response) => {
    const post  = posts.filter(x => x.id === req.params.id)[0]
    const indexOfPost = posts.indexOf(post)
    if(post){
        posts.splice(indexOfPost, 1)
        res.sendStatus(204)
    } else {
        res.sendStatus(404)
    }
})

testingRouter.delete("/", (req: Request, res: Response) => {
    deleteAllBlogsData()
    deleteAllPostsData()
    res.sendStatus(204)
})