const axios = require('axios');

class Cars {
  static getCars() {
    return axios.get('/cars.json').then(resp => resp.data);
  }
}

module.exports = Cars;