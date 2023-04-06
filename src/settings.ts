import express from "express";
import {blogsRouter, postsRouter, startRouter, testingRouter} from "./app";


export const app = express();

app.use(express.json())

app.use("", startRouter)
app.use("/blogs", blogsRouter)
app.use("/posts", postsRouter)
app.use("/testing/all-data", testingRouter)


