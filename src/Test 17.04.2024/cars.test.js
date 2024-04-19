const axios = require('axios');
const Cars = require('./cars.js');

jest.mock('axios');

test('fetch cars', () => {
  const cars = [{name: 'MyCar'}];
  const resp = {data: cars};
  
  axios.get.mockResolvedValue(resp);

  return Cars.getCars().then(data => expect(data).toEqual(cars));
});