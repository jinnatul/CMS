import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  branches: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Branch',
    },
  ],
  officers: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Officer',
    },
  ],
  transports: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Transport',
    },
  ],
});

if (!mongoose.models.Admin) {
  mongoose.model('Admin', adminSchema);
}

export default mongoose.models.Admin;
