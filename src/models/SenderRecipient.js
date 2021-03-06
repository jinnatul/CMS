import mongoose from 'mongoose';

const senderRecipientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
  },
  country: {
    type: String,
  },
});

if (!mongoose.models.SenderRecipient) {
  mongoose.model('SenderRecipient', senderRecipientSchema);
}

export default mongoose.models.SenderRecipient;
