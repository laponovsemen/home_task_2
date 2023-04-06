import express from 'express'
import {startRouter} from './app'


const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use("", startRouter)
const startApp =  () => {
    app.listen(port, () => {
        console.log(`app started on ${port} port`)
    })
}