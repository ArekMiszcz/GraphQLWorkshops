import dbClient from './../externals/dbClient';

const getUser = (args: { id: string }): User | undefined =>
    dbClient.users.find(u => u.id === Number(args.id))

const getUsers = (): User[] => dbClient.users

const createUser = (args: { input: UserInput }): User => {
    const user = {
        id: dbClient.users.length + 1,
        ...args.input,
    }

    dbClient.users.push(user)

    return user
}

const updateUser = (args: { user: User }): User => {
    const index = dbClient.users.findIndex(u => u.id === args.user.id)
    const targetUser = dbClient.users[index]

    if (targetUser) dbClient.users[index] = args.user

    return targetUser
}

export default {
    getUser,
    getUsers,
    createUser,
    updateUser
}