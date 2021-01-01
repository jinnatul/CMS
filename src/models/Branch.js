import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'provide branch name'],
  },
  email: {
    type: String,
    required: [true, 'provide branch email'],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'provide branch phone number'],
  },
  address: {
    type: String,
    required: [true, 'provide branch address'],
  },
  city: {
    type: String,
    required: [true, 'provide branch city'],
  },
  state: {
    type: String,
    required: [true, 'provide branch state'],
  },
  pin: {
    type: String,
    required: [true, 'provide branch pin'],
  },
  country: {
    type: String,
    required: [true, 'provide branch country name'],
  },
  transports: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Transport',
    },
  ],
});

if (!mongoose.models.Branch) {
  mongoose.model('Branch', branchSchema);
}

export default mongoose.models.Branch;
