import { app } from "@src/app"
import request from "supertest"
import { describe, test } from "vitest"

describe('User E2E', () => {

    test("Deve ser possível criar um usuário", async () => {
        await app.ready()

        await request(app.server)
            .post("/users")
            .send({
                name: "User Test E2E", username: "user_name_test_e2e"
            }).expect(200)

    })

})