import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Lesson {
    name: String
    mins: Int
    summary: String
  }

  type Query {
    lessons: [Lesson]
  }

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    createNewBook(title: String, author: String!): Book
  }

  type Mutation {
    submitNewLesson(name: String!, mins: Int!, summary: String): Lesson
  }
`;

const lessons = [
  {
    name: "Coding",
    mins: 30,
    summary: "Kick off with graphql - proper go",
  },
  {
    name: "Ukulele",
    mins: 30,
    summary: "Continued finger exercises and notes of Aeris theme",
  },
];

const books = [
  {
    title: "Book 1",
    author: "kate",
  },
  {
    title: "Book 2",
    author: "bob",
  },
];

const resolvers = {
  Query: {
    books: () => books,
    lessons: () => lessons,
  },
  Mutation: {
    createNewBook(parent, args, context, info) {
      const book = {
        title: args.title,
        author: args.author,
      };

      books.push(book);
      return book;
    },

    submitNewLesson(parent, args, context, info) {
      const lesson = {
        name: args.name,
        mins: args.mins,
        summary: args.summary,
      };

      lessons.push(lesson);
      return lesson;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server ready at ${url}`);
});
