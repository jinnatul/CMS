import mongoose from 'mongoose';

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['admin', 'manager', 'officer', 'driver'],
  },
});

if (!mongoose.models.Role) {
  mongoose.model('Role', roleSchema);
}

export default mongoose.models.Role;
