import {InputType, Field} from '@nestjs/graphql';
import {Min, IsEnum, IsMongoId} from 'class-validator';

export enum Extensions {
    basic = 'BASIC'
}

@InputType()
export class InstanceCreateInput {
    @Field()
    @IsMongoId()
    creatorId: string;

    @Field()
    @Min(3)
    instanceName: string;

    @Field()
    @IsEnum(Extensions)
    extension: string;
}
