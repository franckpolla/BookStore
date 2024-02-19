import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Cat", bookSchema);
//ongoose is a MongoDB ODM i.e (Object database Modelling) that used to translate the code and its representation from MongoDB to the Node. js serve
//In the context of Mongoose and MongoDB:A Mongoose model is a wrapper around the MongoDB collection that allows you to interact with MongoDB documents using object-oriented programming techniques in Node.js. It provides an abstraction layer that simplifies interactions with MongoDB and enforces a schema structure for your data.
