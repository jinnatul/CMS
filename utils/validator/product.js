const branchValidator = (body) => {
  // check object name
  if (!body.productInfo) return 'provide product information.';
  if (!body.senderInfo) return 'provide sender information.';
  if (!body.recipientInfo) return 'provide recipient information.';

  const {
    productInfo, senderInfo, recipientInfo,
  } = body;
  const {
    description, quantity, deliveryCharge, fromLocation, toLocation, status,
  } = productInfo;
  const {
    name: sname, contact: scontact, address: saddress, city: scity, state: sstate,
  } = senderInfo;
  const {
    name: rname, contact: rcontact, address: raddress, city: rcity, state: rstate,
  } = recipientInfo;

  // product
  if (!description) return 'provide product description.';
  if (!quantity) return 'provide product quantity.';
  if (!deliveryCharge) return 'provide product delivery charge.';
  if (!fromLocation) return 'provide current branch name.';
  if (!toLocation) return 'provide product destination branch name.';
  if (!status) return 'provide product status.';

  // sender
  if (!sname) return 'provide sender name.';
  if (!scontact) return 'provide sender contact.';
  if (!saddress) return 'provide sender address.';
  if (!scity) return 'provide sender city.';
  if (!sstate) return 'provide sender state.';

  // recipient
  if (!rname) return 'provide recipient name.';
  if (!rcontact) return 'provide recipient contact.';
  if (!raddress) return 'provide recipient address.';
  if (!rcity) return 'provide recipient city.';
  if (!rstate) return 'provide recipient state.';

  return 'ok';
};

export default branchValidator;
