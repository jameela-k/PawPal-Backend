// models/Pet.js
import mongoose from 'mongoose';

const petSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    type: { type: String, enum: ['dog', 'cat', 'other'], required: true },
    breed: String,
    age: Number,
    gender: { type: String, enum: ['male', 'female'] },
    description: String,
    images: [String], // Cloudinary URLs
    adopted: { type: Boolean, default: false },
    location: String,
    shelter: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Shelter or uploader
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  },
  { timestamps: true }
);

export default mongoose.model('Pet', petSchema);
