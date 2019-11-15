const { google } = require('googleapis');

const blogger = google.blogger({
  version: 'v3',
  auth: process.env.BLOGGER_API_KEY,
});

const params = {
  blogId: `${process.env.BLOGGER_USER_ID}`,
};

function listBlogs(callback) {
  blogger.posts.list(params, (err, response) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, response.data.items);
    }
  });
}

module.exports = {
  listBlogs,
};