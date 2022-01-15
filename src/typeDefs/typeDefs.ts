import { gql } from "apollo-server";

export const typeDefs = gql`
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
