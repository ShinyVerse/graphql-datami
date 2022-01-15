import { ApolloServer } from "apollo-server";
// import { typeDefs } from "./typeDefs";
import { typeDefs } from "src/typeDefs";

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
    createNewBook(
      _parent: any,
      args: { title: any; author: any },
      _context: any,
      _info: any,
    ) {
      const book = {
        title: args.title,
        author: args.author,
      };

      books.push(book);
      return book;
    },

    submitNewLesson(
      _parent: any,
      args: { name: any; mins: any; summary: any },
      _context: any,
      _info: any,
    ) {
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
