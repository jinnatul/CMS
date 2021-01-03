const branchValidator = (body) => {
  const { name, phone, address } = body;

  if (!name) return 'provide branch name.';
  if (!phone) return 'provide branch phone number.';
  if (!address) return 'provide branch address.';
  return 'ok';
};

export default branchValidator;
