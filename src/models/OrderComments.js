import mongoose from 'mongoose';

const orderCommentsSchema = new mongoose.Schema({
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
});

if (!mongoose.models.OrderComments) {
  mongoose.model('OrderComments', orderCommentsSchema);
}

export default mongoose.models.OrderComments;
