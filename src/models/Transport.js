import mongoose from 'mongoose';

const transportSchema = new mongoose.Schema({
  driverInfo: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
  driverSalary: {
    type: Number,
  },
  // vehicle identification number (vin)
  vin: {
    type: String,
  },
  expectedStartTime: {
    type: Date,
  },
  expectedReachTime: {
    type: Date,
  },
  sourceBranch: {
    type: mongoose.Schema.ObjectId,
    ref: 'Branch',
  },
  destinationBranch: {
    type: mongoose.Schema.ObjectId,
    ref: 'Branch',
  },
});

if (!mongoose.models.Transport) {
  mongoose.model('Transport', transportSchema);
}

export default mongoose.models.Transport;
