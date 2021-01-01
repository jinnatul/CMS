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
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

if (!mongoose.models.SenderRecipient) {
  mongoose.model('SenderRecipient', senderRecipientSchema);
}

export default mongoose.models.SenderRecipient;
