const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
      minlength: [3, "name should be atleast 3 characters"],
      maxlength: [15, "name should have maximum 15 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      lowercase: true,
      unique: [true, "Email should be unique"],
      validate: [validator.isEmail, "Please Enter Valid Email Address"],
    },
    contactNumber: {
      type: Number,
      required: [true, "Contact Number is Required"],
      unique: [true, "Contact Number must be Unique"],
      trim: true,
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Contact Number Should be 10 Characters",
      },
    },
    password: {
      type: String,
      required: [true, "Pasword is required"],
      minlength: [6, "password should be atleast 6 characters"],
      maxlength: [10, "password should be maximum 10 characters"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);

module.exports = User;
