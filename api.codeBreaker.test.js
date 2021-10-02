const request = require("supertest");
const api = require("./app"); // Arrange

describe("testing codeBreaker path", () => {
    test("it should return status code 200", done => {
        request(api)
        .get("/api/1234") // Act
        .then(response => {
            expect(response.statusCode).toBe(200); //Assert
            done();
        });
    });
    test("it should return application/json content.type", done => {
        request(api)
        .get("/api/1234") // Act
        .then(response => {
            expect(response.type).toBe("application/json");
            done();
        });
    });

    test("it should return a valid json object", done => {
        request(api)
        .get("/api/1234") // Act
        .then(response => {
            expect(response.body).not.toBeNull();
            expect(response.body.result).not.toBeUndefined();
            done();
        });
    });
    /*test("it should return a correct answer", done => {
        request(api)
        .get("/sum?a=1&b=1") // Act
        .then(response => {
            expect(response.body.result).toBe(2);
            done();
        });
    }); */
})