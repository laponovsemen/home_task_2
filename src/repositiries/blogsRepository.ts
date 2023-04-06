
import {BlogInputModelType, BlogViewModelType} from "../appTypes";

let blogs : Array<BlogViewModelType> = []

export function deleteAllBlogsData (){
    blogs = []
    return
}
export function  getAllBlogs() {
    return blogs
}

export function  createBlog(Object:BlogInputModelType) {
    const newBlog = {
        id : blogs.length.toString(),
        name : Object.name,
        description : Object.description,
        websiteUrl : Object.websiteUrl
    }
    blogs.push(newBlog)
    return newBlog
}
