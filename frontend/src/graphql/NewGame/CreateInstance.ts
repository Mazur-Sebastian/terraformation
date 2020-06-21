import gql from 'graphql-tag';

export const CREATE_INSTANCE = gql`
    mutation CreateInstance($creatorId: String!, $instanceName: String!, $extension: String!) {
        createInstance(
            instanceCreateInput: {
                creatorId: $creatorId
                instanceName: $instanceName
                extension: $extension
            }
        ) {
            id
            users
            board
            extensions
            cards
            isDone
        }
    }
`;
