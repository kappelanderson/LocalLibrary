const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GernresSchema = new Schema({
  name: {
    type: String,
    min: 3,
    max: 100,
    required: true,
  }
});

// Virtual for bookinstance's URL
GernresSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._id}`;
});


// Export model
module.exports = mongoose.model("Gernres", GernresSchema);
