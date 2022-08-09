import express, { urlencoded, json } from "express";
import { ApolloServer } from "apollo-server-express";
import { join } from "path";

import { typeDefs, resolvers } from './schemas/index.js';
import db from "./config/connection.js";
const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: authMiddleware
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(urlencoded({ extended: false }));
app.use(json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(join(__dirname, "../client/build/index.html"));
});

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
