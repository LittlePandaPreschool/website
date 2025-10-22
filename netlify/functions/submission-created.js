exports.handler = async function(event, context) {
  const { payload } = JSON.parse(event.body);
  const { data } = payload;

  let startDate = '';
  switch (data.start_date) {
    case 'asap':
      startDate = 'This family is looking to start as soon as possible.';
      break;
    case '1-3_months':
      startDate = 'This family is looking to start in about 1-3 months.';
      break;
    case '3-6_months':
      startDate = 'This family is looking to start in about 3-6 months.';
      break;
    case 'exploring':
      startDate = 'This family is just exploring their options.';
      break;
  }

  const formattedData = {
    ...data,
    start_date: startDate,
  };

  return {
    statusCode: 200,
    body: JSON.stringify({
      ...payload,
      data: formattedData,
    }),
  };
};
