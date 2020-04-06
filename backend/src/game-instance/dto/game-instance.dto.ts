import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class GameInstanceDto {
    @Field(() => ID)
    readonly id: string;

    @Field(() => [String], { nullable: true })
    readonly users?: string[];

    @Field()
    readonly board: string;

    @Field(() => [String])
    readonly gameAdditions: string[];

    @Field(() => [Int])
    readonly cards: number[];

    @Field()
    readonly isDone: boolean;
}
