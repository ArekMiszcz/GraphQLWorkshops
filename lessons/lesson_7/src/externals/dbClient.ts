const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "User" },
]

const users = [
    { id: 1, name: "John Doe", email: "johndoe@gmail.com", roleId: 1 },
    { id: 2, name: "Jane Doe", email: "janedoe@gmail.com", roleId: 2 },
    { id: 3, name: "Mike Doe", email: "mikedoe@gmail.com", roleId: 2 },
]

export default {
    users,
    roles
};