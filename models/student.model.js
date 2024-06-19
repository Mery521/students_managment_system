const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, min: 6, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: true },
  country_id: { type: Schema.Types.ObjectId, ref: "Countries" },
  city_id: { type: Schema.Types.ObjectId, ref: "Cities" },
}, {
  timestamps: { createdAt: 'created_at'}
});

module.exports = mongoose.model('Students', studentSchema);