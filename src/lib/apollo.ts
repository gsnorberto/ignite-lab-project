import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4srfnfo2hsx01z34iy454mf/master',
    cache: new InMemoryCache()
})