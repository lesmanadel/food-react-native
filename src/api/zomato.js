import axios from 'axios';

export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': '7d96bdc355f862ebb76189d6364c5a35'
  }

});
