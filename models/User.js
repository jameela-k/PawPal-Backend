// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['adopter', 'shelter', 'vet', 'admin'],
      default: 'adopter',
    },
    phone: String,
    avatar: String,
    location: String,
    bio: String,
    petsOwned: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pet' }],
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
