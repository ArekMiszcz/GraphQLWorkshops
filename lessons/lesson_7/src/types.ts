type User = {
    id: number
    name: string
    email: string
    roleId: number
}

type UserInput = Pick<User, "email" | "name" | "roleId">