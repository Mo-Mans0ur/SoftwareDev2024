import express from 'express';

const app = express();

app.use(express.static('public'));

import { GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});


const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'world',
            
        },
        },
    }),
    });


    import { createHandler } from 'graphql-http/lib/use/express';

    app.all('/graphql', createHandler({ schema }));