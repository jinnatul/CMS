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
});

if (!mongoose.models.Admin) {
  mongoose.model('Admin', adminSchema);
}

export default mongoose.models.Admin;
