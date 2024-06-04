const express = require('express');
const axios = require('axios');
const Parser = require('rss-parser');
const cors = require('cors');

const app = express();
const parser = new Parser();

app.use(cors());

app.get('/rss', async (req, res) => {
  const { url } = req.query;
  try {
    const response = await axios.get(url, { responseType: 'document' });
    const feed = await parser.parseString(response.data);
    res.json(feed);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
