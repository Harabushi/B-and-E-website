import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/b-and-e", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoose.connection;
