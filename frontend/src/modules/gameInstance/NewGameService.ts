import { ApolloService } from '@/common/services/ApolloService';
import { CREATE_INSTANCE } from '@/graphql/NewGame/CreateInstance';

import { CreateInstance } from './models/createInstance';

export class NewGameService {
    constructor(private readonly apolloService: ApolloService) {}

    public createNewGame(newInstanceData: CreateInstance) {
        return this.apolloService.mutation<typeof CREATE_INSTANCE, CreateInstance>(
            CREATE_INSTANCE,
            newInstanceData
        );
    }
}
