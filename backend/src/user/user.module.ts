import { Module } from '@nestjs/common';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { userProviders } from './user.providers';
import { DatabaseModule } from './../database/database.module';

@Module({
    imports: [DatabaseModule],
    providers: [UserResolver, UserService, ...userProviders],
})
export class UserModule {}
