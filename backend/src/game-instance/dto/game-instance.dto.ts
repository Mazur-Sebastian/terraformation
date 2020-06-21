import {Field, ID, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class GameInstanceDto {
    @Field(() => ID)
    readonly id: string;

    @Field(() => [String], {nullable: true})
    readonly users?: string[];

    @Field({nullable: true})
    readonly board?: string;

    @Field()
    readonly instanceName: string;

    @Field(() => [String])
    readonly extensions: string[];

    @Field(() => [Int])
    readonly cards: number[];

    @Field()
    readonly isDone: boolean;
}
