import { beforeAll, describe, expect, test } from "vitest"
import { UserService } from "../user.service"

let useTest: UserService

beforeAll(() => {
    useTest = new UserService()
})
describe('User Service', () => {

    // test("Deve ser possível criar um usuário", () => {
    //     expect(true).toBeTruthy()
    // })


    // test("Deve ser possível criar um usuário", () => {
    //     //const userService = new UserService()
    //     const result = useTest.create({
    //         name: "Manuel dos Santos",
    //         username: "mannuelst"
    //     })
    //     //  console.log(result)

    //     expect(result).resolves //por ser promisse
    // })


    test("Deve ser possível criar um usuário", () => {
        //const userService = new UserService()
        const result = useTest.create({
            name: "Manuel dos Santos",
            username: "mannuelst"
        })
        //  console.log(result)

        expect(result).toHaveProperty("id") //por ser promisse
    })
    // onTestFailed // dizendo que o teste irá falhar
    test("Não deve ser possível criar um usuário", () => {
        useTest.create({
            name: "Manuel dos Santos",
            username: "mannuelst_exists"
        })

        //  console.log(result)

        //  expect(result).rejects //por ser promisse
        // expect(async () => {
        //     await useTest.create({
        //         name: "Manuel dos Santos",
        //         username: "mannuelst"
        //     })
        // }).rejects.toThrow('User already exists')

        expect(() => {
            useTest.create({
                name: "Manuel dos Santos",
                username: "mannuelst_exists"
            })
        }).toThrow('User already exists')

    })


    // test('Deve ser possível listar usuários', () => {
    //     const result = useTest.findAll()

    //     expect(result).toHaveLength(2)
    // })

})

