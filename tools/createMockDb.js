/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const mockData = require('./mockData');

const { users, giftCard, giftCategoryType, vendorType } = mockData;
const data = JSON.stringify({ users, giftCard, giftCategoryType, vendorType });
const filepath = path.join(__dirname, 'db.json');

fs.writeFile(filepath, data, function(err) {
  err ? console.log(err) : console.log('Mock DB created.');
});
