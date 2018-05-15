const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Post = mongoose.model('performposts');

module.exports = app => {

  app.get('/api/performposts', (req, res) => {
    Post.find({}, (err,posts)=> {
      res.send(posts)
    })


  });

  app.post('/api/performposts', requireLogin,  async (req, res) => {
    console.log('submit action')
    const { title, body, imageURL,videoURL } = req.body;
    const post = await new Post({
      title,
      imageURL,
      videoURL,
      body,
      _user: req.user.id,
      createAt: Date.now()
    });
    post.save()
    res.send();
  });
};
