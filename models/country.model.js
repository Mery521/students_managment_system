const mongoose = require('mongoose');
const { Schema } = mongoose;

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true }
}, {
  timestamps: { createdAt: 'created_at' }
});

module.exports = mongoose.model('Countries', countrySchema);
