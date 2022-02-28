import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://root1234:Mongo7827@first-cluster.gaym9.mongodb.net/Batch1500DB?retryWrites=true&w=majority",
    )
    .then((res) => console.log("Connected successfully to MOngodb"))
    .catch((err) => console.log(err));
};

export default connectDB;
