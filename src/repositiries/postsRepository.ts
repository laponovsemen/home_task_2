
import {BlogInputModelType, PostInputModelType, PostViewModelType} from "../appTypes";
import {blogs} from "./blogsRepository";

let posts : Array<PostViewModelType> = []

export function deleteAllPostsData (){
    posts = []
    return
}
export function  getAllPosts() {
    return posts
}

export function  createPosts(Object:PostInputModelType) {
    const newPost : PostViewModelType = {
        id : posts.length.toString(),
        title : Object.title,
        shortDescription : Object.shortDescription,
        content : Object.content,
        blogId : Object.blogId,
        blogName : blogs[blogs.indexOf(blogs.filter(n => n.id === Object.blogId)[0])].name
    }
    posts.push(newPost)
    return newPost
}

export function  readPostByID(idOfPost : string) {
    return posts.filter(n => n.id === idOfPost)[0]
}