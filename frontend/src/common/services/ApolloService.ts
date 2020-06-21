import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { DocumentNode } from 'graphql';
import { from } from 'rxjs';

export class ApolloService {
    private link = new HttpLink({
        uri: 'http://localhost:5000/graphql'
    });

    private client = new ApolloClient({
        link: this.link,
        cache: new InMemoryCache()
    });

    public query<Query, Variables = {}>(query: DocumentNode, variables?: Variables) {
        return from(
            this.client.query<Query, Variables>({
                query,
                variables,
                fetchPolicy: 'network-only'
            })
        );
    }

    public mutation<Mutation, Variables = {}>(mutation: DocumentNode, variables?: Variables) {
        return from(
            this.client.mutate<Mutation, Variables>({
                mutation,
                variables
            })
        );
    }
}
