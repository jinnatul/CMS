import mongoose from 'mongoose';

// date wise report
const reportSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  totalShipments: {
    type: Number,
  },
  totalDeliveries: {
    type: Number,
  },
  totalReturneds: {
    type: Number,
  },
  totalCancels: {
    type: Number,
  },
  totalDeliveryCharges: {
    type: Number,
  },
  totalCashOnDeliveryAmounts: {
    type: Number,
  },
  totalGoodsAndServicesTaxAmounts: {
    type: Number,
  },
  totalReturnedAmounts: {
    type: Number,
  },
  totalCostAmounts: {
    type: Number,
  },
  totalBalance: {
    type: Number,
  },
  lastModified: {
    type: Date,
  },
});

if (!mongoose.models.Report) {
  mongoose.model('Report', reportSchema);
}

export default mongoose.models.Report;
