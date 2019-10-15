process.env.NODE_ENV = 'test';

const expect = require('chai').expect;
const request = require('supertest');
const app = require('../app');
const db = require('../db');

describe("Person /person", () => {
    before((done) => {
        db.connect();
        done();
    });

    after((done) => {
        db.close();
        done();
    });

    // it("Add person", (done) => {
    //     request(app).post('/person/')
    //         .send({
    //             name: "Saman",
    //             email: "saman@gmail.com",
    //             address: "No. 123, Colombo, Sri Lanka",
    //             contactNumber: "+94 77 1234567"
    //         })
    //         .then((res) => {
    //             const body = res.body;
    //             expect(body).to.contain.property("_id");
    //             expect(body).to.contain.property("name");
    //             expect(body).to.contain.property("email");
    //             expect(body).to.contain.property("address");
    //             expect(body).to.contain.property("contactNumber");
    //             done();
    //         })
    //         .catch((err) => {
    //             done(err);
    //         })
    // });

    it("Add person without name", (done) => {
        request(app).post('/person/')
            .send({
                email: "kasun@gmail.com"
            })
            .then((res) => {
                const body = res.body;
                expect(body.message.errors.name.name).to.equal('ValidatorError');
                done();
            })
            .catch((err) => {
                done(err);
            })
    });

    // it("Add person with duplicate name", (done) => {
    //     request(app).post('/person/')
    //         .send({
    //             name: "Priyankara",
    //             email: "priyankara@gmail.com"
    //         })
    //         .then((res) => {
    //             const body = res.body;
    //             expect(body.message.errors.name.name).to.equal('ValidatorError');
    //             done();
    //         })
    //         .catch((err) => {
    //             done(err);
    //         })
    // });
});
