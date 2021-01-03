import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productCode: {
    type: String,
  },
  description: {
    type: String,
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

// Query middleware
productSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'fromLocation',
    select: '-__v -transports',
  }).populate({
    path: 'toLocation',
    select: '-__v -transports',
  }).populate({
    path: 'sender',
    select: '-__v',
  }).populate({
    path: 'recipient',
    select: '-__v',
  });
  next();
});

if (!mongoose.models.Product) {
  mongoose.model('Product', productSchema);
}

export default mongoose.models.Product;
