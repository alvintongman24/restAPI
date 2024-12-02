import mongoose from "mongoose";

const SchemaUser = new mongoose.Schema({
  Name: { type: String, required: true, unique: true },
  Age: { type: Number, required: true },
  Gender: { type: String, required: true },
  Department: { type: String },
  Position: { type: String },
  Access: { type: Boolean },
  Level: { type: Number },
});

const Users = mongoose.model("Users", SchemaUser);

export default Users;
