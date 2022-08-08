import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Artist {
    _id: ID!
    name: String!
    about: String
    thumbnail: String
    images: [String]
    links: [String]
    projects: [String]
  }

  type Project {
    _id: ID!
    name: String!
    about: String
    genres: [String]
    thumbnail: String
    images: [String]
    links: [String]
    artists: [String]
  }

  type Query {
    artists: [Artist]
    artist(_id: ID!): Artist
    projects: [Project]
    project(_id: ID!): Project
  }

  type Mutation {
    addArtist(name: String!): Artist
    addProject(name: String!): Project
  }
`