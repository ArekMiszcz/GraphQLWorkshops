import { User } from '../generated/graphql';
import dbClient from './../externals/dbClient';

export default {
    User: {
        role(user: User) {
            return dbClient.roles.find(role => role.id === user.role.id) ?? null
        }
    },
}