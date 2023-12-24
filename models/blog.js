const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },

    snippet: {
      required: true,
      type: String,
    },

    body: {
      required: true,
      type: String,
    },
  },
  { timestamps: true }
);


const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

