import mongoose from 'mongoose';

const officerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  dutyStartAt: {
    type: String,
  },
  dutyEndAt: {
    type: String,
  },
  salary: {
    type: Number,
  },
  branches: {
    type: mongoose.Schema.ObjectId,
    ref: 'Branch',
  },
  orderInfos: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Courier',
    },
  ],
});

if (!mongoose.models.Officer) {
  mongoose.model('Officer', officerSchema);
}

export default mongoose.models.Officer;
