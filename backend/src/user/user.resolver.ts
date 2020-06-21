import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';
// import { PubSub } from 'apollo-server-express';

import {UserDto} from './dto/user.dto';

// const pubSub = new PubSub();

@Resolver(of => UserDto)
export class UserResolver {
    constructor() {}

    @Query(returns => UserDto)
    async user(@Args('id') id: string): Promise<boolean> {
        return true;
    }
}
