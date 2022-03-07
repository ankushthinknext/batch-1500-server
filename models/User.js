import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  full_name: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
  },

  email: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },

  isVerified: Boolean,
});

export default mongoose.model("users", userSchema);
