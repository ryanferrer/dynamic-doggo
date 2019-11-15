require('dotenv').config();
const express = require('express');
const blogAPI = require('./API/Blogs.js');

const app = express();

app.use('/api/blogs', blogAPI);
app.use(express.static('dist'));

const PORT = 8080;

app.listen(PORT, () => console.log(`Sending doge coins to port ${PORT}`));