import { User, Role } from '../generated/graphql';

const roles: Role[] = [
    { id: 1, name: "Admin" },
    { id: 2, name: "User" },
]

const users: User[] = [
    { id: 1, name: "John Doe", email: "johndoe@gmail.com", role: roles[0] },
    { id: 2, name: "Jane Doe", email: "janedoe@gmail.com", role: roles[1] },
    { id: 3, name: "Mike Doe", email: "mikedoe@gmail.com", role: roles[1] },
]

export default {
    users,
    roles
};