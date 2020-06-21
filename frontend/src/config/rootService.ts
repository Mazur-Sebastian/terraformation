import { ApolloService } from '@/common/services/ApolloService';
import { NewGameService } from '@/modules/gameInstance/NewGameService';

const apolloService = new ApolloService();
const newGameService = new NewGameService(apolloService);

export const rootService = {
    apolloService,
    newGameService
} as const;

export type RootService = typeof rootService;
