import { connect, connection } from "mongoose";

connect(process.env.MONGODB_URI || "mongodb://localhost/b-and-e", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default connection;
