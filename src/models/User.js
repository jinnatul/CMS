import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
  },
  image: {
    type: String,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pin: {
    type: String,
  },
  country: {
    type: String,
  },
  description: {
    type: String,
  },
  phone: {
    type: String,
  },
  role: {
    type: mongoose.Schema.ObjectId,
    ref: 'Role',
  },
  active: {
    type: Boolean,
    default: false,
    select: false,
  },
});

// Document middleware
userSchema.pre('save', async function (next) {
  // Only run this function if password was actually modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// get user name from email
userSchema.pre('save', function (next) {
  if (this.email) {
    this.userName = this.email.match(/^([^@]*)@/)[1];
  }
  next();
});

userSchema.methods.comparePassword = async (
  candidatePassword,
  userPassword,
) => {
  const result = await bcrypt.compare(candidatePassword, userPassword);
  return result;
};

if (!mongoose.models.User) {
  mongoose.model('User', userSchema);
}

export default mongoose.models.User;
