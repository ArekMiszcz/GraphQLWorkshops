import {
    User,
    UserInput,
    QueryGetUserArgs
} from '../generated/graphql';
import dbClient from './../externals/dbClient';

const getUser = (args: QueryGetUserArgs): User | undefined =>
    dbClient.users.find(u => u.id === Number(args.id))

const getUsers = (): User[] => dbClient.users

const createUser = (args: { input: UserInput }): User => {
    const { name, email, roleId } = args.input;
    const role = dbClient.roles.find(role => role.id === roleId);

    if (!role) {
        throw new Error(`Role with given id ${roleId} not found`)
    }

    const user = {
        id: dbClient.users.length + 1,
        name,
        email,
        role
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