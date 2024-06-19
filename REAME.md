

# Example Vitest Project

This project demonstrates the use of Vitest for unit testing and Supertest for E2E testing in a Node.js application with TypeScript and Fastify.

## Setup

To set up the project, follow these steps:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

## Scripts

- `npm run dev`: Start the development server with hot reloading
- `npm test`: Run all tests using Vitest
- `npm run coverage`: Run tests with coverage report

## Testing

### Unit Tests

Unit tests are written using Vitest. They are located in the `src` directory alongside the source files. Here's an example of a unit test for the `UserService`:

```typescript
import { beforeAll, describe, expect, test } from "vitest"
import { UserService } from "../user.service"

describe('User Service', () => {
  let userService: UserService

  beforeAll(() => {
    userService = new UserService()
  })

  test("Should create a user", () => {
    const result = userService.create({
      name: "John Doe",
      username: "johndoe"
    })

    expect(result).toHaveProperty("id")
  })

  test("Should not create a user with existing username", () => {
    expect(() => {
      userService.create({
        name: "Jane Doe",
        username: "johndoe"
      })
    }).toThrow('User already exists')
  })
})
```

### E2E Tests

E2E tests use Supertest to make HTTP requests to the Fastify server. They are typically located in a separate `e2e` or `tests` directory. Here's an example:

```typescript
import request from "supertest"
import { describe, test } from "vitest"
import { app } from "../../../app"

describe('User E2E', () => {
  test("Should create a user with token", async () => {
    await app.ready()

    await request(app.server)
      .post("/users")
      .set('Authorization', 'Bearer FAKE_TOKEN')
      .send({
        name: "User Test E2E",
        username: "user_name_test_e2e"
      })
      .expect(200)
  })

  test("Should not create a user without token", async () => {
    await app.ready()

    await request(app.server)
      .post("/users")
      .send({
        name: "User Test E2E",
        username: "user_name_test_e2e"
      })
      .expect(401)
  })
})
```

## Dependencies

- Fastify: Web framework
- Vitest: Test runner and assertion library
- Supertest: HTTP assertions for E2E testing
- TypeScript: Programming language
- TSX: TypeScript execution and REPL for Node.js

For a complete list of dependencies, refer to the `package.json` file.

