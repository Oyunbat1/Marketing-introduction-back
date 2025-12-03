import { gql } from "apollo-server";

const typeDefs = gql`
  type Message {
    id: ID!
    name: String!
    email: String!
    phoneNumber: String    # New Field, nullable (optional)
    companyName: String!   # Updated from 'social'
    role: String!          # Updated from 'company'
    service: String!
    message: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getMessages: [Message!]!
  }

  type Mutation {
    createMessage(
      name: String!
      email: String!
      phoneNumber: String  # New Field, nullable (optional)
      companyName: String! # Updated from 'social'
      role: String!        # Updated from 'company'
      service: String!
      message: String!
    ): Message!
  }
`;

export default typeDefs;