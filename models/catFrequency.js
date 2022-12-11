const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-updater");
const category = require("./category");

mongoose.plugin(slug);

const catFrequencySchema = Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: category,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("catFrequency", catFrequencySchema);
