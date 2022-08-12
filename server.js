const express = require('express');
const app = express();

const Users = require('./mock-data/MOCK_DATA.json');

app.get('/users', (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  results = {};

  if (startIndex > 0) {
    results.prev = {
      page: page - 1,
      limit: limit,
    };
  }

  if (endIndex < Users.length) {
    results.next = {
      page: page + 1,
      limit: limit,
    };
  }

  results.results = Users.slice(startIndex, endIndex);

  const prevPage = res.json(results);
});

app.listen(8000, () => {
  console.log('Server is up and fine...');
});
