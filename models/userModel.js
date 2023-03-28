import mongoose from "mongoose";

const userDb = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
});

// UserDB = schema, Users = database name
export default mongoose.model("users", userDb);
