const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email address'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, required: true },
  country_id: { type: Schema.Types.ObjectId, ref: "Countries" },
  city_id: { type: Schema.Types.ObjectId, ref: "Cities" },
}, {
  timestamps: { createdAt: 'created_at'}
});

studentSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  try {
    const hashing = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, hashing);
    return next();
  } catch (error) {
    return next(error);
  }
});

studentSchema.methods.comparePassword = async function(inputPassword) {
  return bcrypt.compare(inputPassword, this.password);
};

module.exports = mongoose.model('Students', studentSchema);
