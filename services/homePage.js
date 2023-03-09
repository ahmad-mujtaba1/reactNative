import axios from 'axios';
const homePageService = {};
const service = require('axios');

const options = {
  method: 'GET',
  url: 'https://endlessmedicalapi1.p.rapidapi.com/InitSession',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'endlessmedicalapi1.p.rapidapi.com',
  },
};

homePageService.getAllcategories = async () => {
  try {
    let response = await service
      .request(options)
      .then(function (records) {
        console.log(records.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export default homePageService;
