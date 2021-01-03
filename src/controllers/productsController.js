import Product from '../models/Product';
import SenderRecipient from '../models/SenderRecipient';
import catchAsync from '../middlewares/catchAsync';
import productValidator from '../../utils/validator/product';
import AppError from '../../utils/AppError';
import sendData from '../../utils/response/sendData';
import {
  getAll,
} from './Factory';

export const createProduct = catchAsync(async (req, res, next) => {
  res.setHeader('Content-type', 'application/json');

  const message = productValidator(req.body);
  if (message !== 'ok') {
    return next(new AppError(`${message}`, 400));
  }

  // sender information
  const senderBody = req.body.senderInfo;
  const senderData = await SenderRecipient.create(senderBody);

  // recipient information
  const recipientBody = req.body.recipientInfo;
  const recipientData = await SenderRecipient.create(recipientBody);

  // product information
  const {
    description, quantity, deliveryCharge, fromLocation, toLocation, status,
  } = req.body.productInfo;

  const body = {
    description,
    quantity,
    deliveryCharge,
    fromLocation,
    toLocation,
    status,
    sender: senderData._id,
    recipient: recipientData._id,
  };

  const productInfo = await Product.create(body);
  return sendData(res, 201, productInfo);
});

export const getProducts = getAll(Product);
