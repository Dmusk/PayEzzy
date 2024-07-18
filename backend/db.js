const mongoose = require("mongoose");

//connect mongoose
mongoose.connect(
  "mongodb+srv://Dadu:DaduMDB%402003@cluster0.mzwtfbm.mongodb.net/PayEzzy"
);

//create schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  fisrtName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50,
  },
});

//create model
const User = mongoose.model("User", userSchema);

//export it

module.exports = {
  User,
};
