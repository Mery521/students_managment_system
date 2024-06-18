const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  country_id: { type: Schema.Types.ObjectId, ref: "Country", required: false },
}, {
  timestamps: { createdAt: 'created_at' }
});

module.exports = mongoose.model('Cities', citySchema);