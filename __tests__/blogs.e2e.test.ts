// @ts-ignore
import request from "supertest"
import {app} from "../src/settings";
import {header} from "express-validator";
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

    /*it("should  return status code 200 and empty array ",  async () =>{

    });*/
});

describe('POST ALL BLOGS',  () => {
    beforeAll(async () => {
        await request(app)
            .delete("/testing/all-data")
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(204)
    })

    it("should  return status code 200 and empty array ",  async () =>{
        const readRequest = await request(app)
            .post("/blogs")
            .set('Authorization', 'Basic YWRtaW46cXdlcnR5')
            .expect(200)
        expect(readRequest.body).toEqual([])
    });

    /*it("should  return status code 200 and empty array ",  async () =>{

    });*/
});
