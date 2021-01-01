import mongoose from 'mongoose';

const courierSchema = new mongoose.Schema({
  productCode: {
    type: String,
  },
  description: {
    type: String,
    required: [true, 'provide courier description'],
  },
  specialInstructions: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  lenght: {
    type: Number,
  },
  breadth: {
    type: Number,
  },
  height: {
    type: Number,
  },
  deliveryCharge: {
    type: Number,
    required: true,
  },
  cashOnDeliveryAmount: {
    type: Number,
  },
  fromLocation: {
    type: mongoose.Schema.ObjectId,
    ref: 'Branch',
  },
  toLocation: {
    type: mongoose.Schema.ObjectId,
    ref: 'Branch',
  },
  sender: {
    type: mongoose.Schema.ObjectId,
    ref: 'SenderRecipient',
  },
  recipient: {
    type: mongoose.Schema.ObjectId,
    ref: 'SenderRecipient',
  },
  status: {
    type: mongoose.Schema.ObjectId,
    ref: 'Status',
  },
  orderComments: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'OrderComments',
    },
  ],
  createdAt: {
    type: Date,
  },
  lastModified: {
    type: Date,
  },
});

if (!mongoose.models.Courier) {
  mongoose.model('Courier', courierSchema);
}

export default mongoose.models.Courier;
