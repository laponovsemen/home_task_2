// @ts-ignore
import request from "supertest"
import {app} from "../src/settings";
import {header} from "express-validator";
import {before} from "node:test";
describe('DELETE BLOGS',  () => {

    it("should  return status code 204 after deleting all blogs ",  async () =>{
        await request(app)
            .delete("/testing/all-data")
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(204)
    });

    it("",  async () => {
        const result = await request(app)
            .get("/")
            .expect(200)
            expect(result.text).toEqual("API started")
    });
});

describe('GET ALL BLOGS',  () => {
    beforeAll(async () => {
        await request(app)
            .delete("/testing/all-data")
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(204)
    })

    it("should  return status code 200 and empty array ",  async () =>{
        const readRequest = await request(app)
            .get("/blogs")
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(200)
        expect(readRequest.body).toEqual([])
    });

    it("should  return status code 200 and empty array after creating ",  async () =>{
        //deleting all data
        await request(app)
            .delete("/testing/all-data")
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(204)
        const createRequest = await request(app)
            .post("/blogs")
            .send({name : "Semen",
                description: "studiyng in KSMA",
                websiteUrl: "https://samurai.it-incubator.io/lessons/homeworks?id=63077bcee5fc0a055535227d"})
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(200)
        //creating new blog

    });
});

describe('POST ALL BLOGS',  () => {
    before(async () => {
        await request(app)
            .delete("/testing/all-data")
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(204)
    })

    it("should  return status code 200 and newly created blog // id : '0'",  async () =>{
        //Posting new Blog
        const createRequest = await request(app)
            .post("/blogs")
            .send({name : "Semen",
                description: "studiyng in KSMA",
                websiteUrl: "https://samurai.it-incubator.io/lessons/homeworks?id=63077bcee5fc0a055535227d"})
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(200)
        //Checking of response Data
        expect(createRequest.body).toEqual({id : "0",
            name : "Semen",
            description: "studiyng in KSMA",
            websiteUrl: "https://samurai.it-incubator.io/lessons/homeworks?id=63077bcee5fc0a055535227d"})

    });
    //checking for proper id
    it("should  return status code 200 and newly created blog // id : '1' ",  async () =>{
        //Posting new Blog
        const createRequest = await request(app)
            .post("/blogs")
            .send({name : "Semen",
                description: "studiyng in KSMA",
                websiteUrl: "https://samurai.it-incubator.io/lessons/homeworks?id=63077bcee5fc0a055535227d"})
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(200)
        //Checking of response Data
        expect(createRequest.body).toEqual({id : "1",
            name : "Semen",
            description: "studiyng in KSMA",
            websiteUrl: "https://samurai.it-incubator.io/lessons/homeworks?id=63077bcee5fc0a055535227d"})

    });
    /*it("should  return status code 200 and empty array ",  async () =>{

    });*/
});

describe('GET BLOG BY ID',  () => {
    before(async () => {
        await request(app)
            .delete("/testing/all-data")
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(204)
    })

    it("should  return status code 200 and newly created blog // id : '0'",  async () =>{
        //Posting new Blog
        const createRequest = await request(app)
            .post("/blogs")
            .send({name : "Semen",
                description: "studiyng in KSMA",
                websiteUrl: "https://samurai.it-incubator.io/lessons/homeworks?id=63077bcee5fc0a055535227d"})
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(200)
        //Checking of response Data
        expect(createRequest.body).toEqual({id : "0",
            name : "Semen",
            description: "studiyng in KSMA",
            websiteUrl: "https://samurai.it-incubator.io/lessons/homeworks?id=63077bcee5fc0a055535227d"})

    });
    //checking for proper id
    it("should  return status code 200 and newly created blog // id : '1' ",  async () =>{
        //Posting new Blog
        const createRequest = await request(app)
            .post("/blogs")
            .send({name : "Semen",
                description: "studiyng in KSMA",
                websiteUrl: "https://samurai.it-incubator.io/lessons/homeworks?id=63077bcee5fc0a055535227d"})
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(200)
        //Checking of response Data
        expect(createRequest.body).toEqual({id : "1",
            name : "Semen",
            description: "studiyng in KSMA",
            websiteUrl: "https://samurai.it-incubator.io/lessons/homeworks?id=63077bcee5fc0a055535227d"})

    });
    /*it("should  return status code 200 and empty array ",  async () =>{

    });*/
});
