import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';

import { USER_SCHEMA } from 'src/constants/schemas';
import { User } from './models/user.model';

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_SCHEMA)
        private readonly userModel: Model<User>,
    ) {}

    createUser(name: string): Promise<User> {
        const createdUser = new this.userModel({ name });

        return createdUser.save();
    }
}
