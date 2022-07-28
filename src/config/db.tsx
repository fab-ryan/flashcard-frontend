import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
    uri: "https://flashcard-api-fab.herokuapp.com/",
    cache: new InMemoryCache()
})