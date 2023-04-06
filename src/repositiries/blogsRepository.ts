
import {BlogInputModelType, BlogViewModelType} from "../appTypes";

let blogs : Array<BlogViewModelType> = []

//deleting all data in both databases
export function deleteAllBlogsData (){
    blogs = []
    return
}
//Read all blogs
export function  getAllBlogs() {
    return blogs
}
//create new blog according to BlogInputModelType
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
//create new blog according to BlogViewModelType
export function  readBlogByID(idOfBlog : string) {
    return blogs.filter(n => n.id ===idOfBlog)

}


