import mongoose from 'mongoose';

const branchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'provide branch name'],
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
