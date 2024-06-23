import request from "supertest"
import { describe, test } from "vitest"
import { app } from "../../../app"

describe('User E2E', () => {

    test("Deve ser possível criar um usuário com token", async () => {
        await app.ready()

        await request(app.server)
            .post("/users")
            .set('Authorization', 'Bearer FAKE_TOKEN')
            .send({
                name: "User Test E2E",
                username: "user_name_test_e2e"
            }).expect(200)

    })

    test("Não deve ser possível criar um usuário sem token", async () => {
        await app.ready()

        await request(app.server)
            .post("/users")
            .send({
                name: "User Test E2E",
                username: "user_name_test_e2e"
            }).expect(401)

    })

})