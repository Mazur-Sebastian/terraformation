import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
    @Field(type => ID)
    readonly id: string;

    @Field()
    readonly name: string;

    @Field(() => [Int])
    readonly usedCards: number[];

    @Field(() => [Int])
    readonly handCards: number[];

    @Field(() => Int)
    readonly points: number;

    @Field(() => [Resources])
    readonly resources: Resources[];
}

@ObjectType()
class Resources {
    @Field(() => Int)
    readonly id: number;

    @Field()
    readonly name: string;

    @Field(() => Int)
    readonly levelProduction: number;

    @Field(() => Int)
    readonly count: number;
}
