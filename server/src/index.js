const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const resolvers = {
  Query: {
    allMermen: (root, args, context, info) => {
      return context.db.query.mermen({}, info);
    },
  },
  Mutation: {
    addMerman: (root, args, context, info) => {
      return context.db.mutation.createMerman({
        data: {
          name: args.name,
          location: args.location,
        },
      }, info);
    },
    changeMerman: (root, args, context, info) => {
      return context.db.mutation.updateMerman({
        data: {
          location: args.location,
        },
        where: {
          id: args.id,
        }
      }, info);
    },
    removeMerman: (root, args, context, info) => {
      return context.db.mutation.deleteMerman({
        where: {
          id: args.id,
        }
      }, info);
    },
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'https://us1.prisma.sh/kening/mermanager-db/mermen',
      secret: 'mysecret123',
      debug: true,
    }),
  }),
});


server.start(() => console.log(`Server is running on http://localhost:4000`))
