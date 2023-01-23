import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: String,
    age: Number,
    favoriteFoods: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("users", UserSchema);
