import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.connect(
    "mongodb+srv://pruebaadmin:pruebaadmin@cluster0.k4avw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    () => {
      console.log("connected to db");
    }
  );
};
