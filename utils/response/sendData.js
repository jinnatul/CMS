import moment from 'moment';

const sendData = (res, status, data) => {
  res.status(status).json({
    status: 'ok',
    requestTime: moment(new Date(Date.now())).format('LLL'),
    data,
  });
};

export default sendData;
