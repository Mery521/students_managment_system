const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  full_name: { type: String, required: true },
  age: { type: String, required: true },
  country_id: { type: Schema.Types.ObjectId, ref: "Countries", required: true },
  city_id: { type: Schema.Types.ObjectId, ref: "Cities", required: true },
}, {
  timestamps: { createdAt: 'created_at'}
});

module.exports = mongoose.model('Students', studentSchema);