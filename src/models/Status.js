import mongoose from 'mongoose';

const statusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Courier Pickup', 'Shipped', 'Intransit', 'Arrived at Destination', 'Out for Delivery', 'Delivered', 'Pending', 'Returned', 'Cancel'],
  },
  description: {
    type: String,
  },
  lastModified: {
    type: Date,
  },
});

if (!mongoose.models.Status) {
  mongoose.model('Status', statusSchema);
}

export default mongoose.models.Status;
