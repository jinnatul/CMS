import mongoose from 'mongoose';

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'provide location name'],
  },
});

if (!mongoose.models.Location) {
  mongoose.model('Location', locationSchema);
}

export default mongoose.models.Location;
