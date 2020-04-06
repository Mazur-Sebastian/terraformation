import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'apollo-server-express';

import { UserDto } from './dto/user.dto';

// const pubSub = new PubSub();

@Resolver(of => UserDto)
export class UserResolver {
    constructor() {}

    @Query(returns => UserDto)
    async user(@Args('id') id: string): Promise<boolean> {
        return true;
    }

    // @Query(returns => [Recipe])
    // recipes(@Args() recipesArgs: RecipesArgs): Promise<Recipe[]> {
    //     return this.recipesService.findAll(recipesArgs);
    // }

    // @Mutation(returns => Recipe)
    // async addRecipe(
    //     @Args('newRecipeData') newRecipeData: NewRecipeInput,
    // ): Promise<Recipe> {
    //     const recipe = await this.recipesService.create(newRecipeData);
    //     pubSub.publish('recipeAdded', { recipeAdded: recipe });
    //     return recipe;
    // }

    // @Mutation(returns => Boolean)
    // async removeRecipe(@Args('id') id: string) {
    //     return this.recipesService.remove(id);
    // }

    // @Subscription(returns => Recipe)
    // recipeAdded() {
    //     return pubSub.asyncIterator('recipeAdded');
    // }
}
