const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const shopPost = mongoose.model('shopposts');
const User = mongoose.model('users');
module.exports = app => {
  app.get('/api/shopposts', (req, res) => {
    shopPost.find({}, (err, posts) => {
      res.send(posts);
    });
  });

  app.get('/api/shopposts/:id', (req, res) => {
    shopPost.findOne({'_id': req.params.id}, (err, post) => {
      res.send(post);
    });
  });


  app.post('/api/shopposts/:id', requireLogin, async (req, res) => {
    User.findOne({'_id': req.body.userid}, (err,user)=> {
     user.set({ bought:req.params.id})
     user.save()
    })
    req.user.credits -= req.body.price
    const user = await req.user.save();
    res.send(user);

});

  app.post('/api/shopposts', requireLogin, async (req, res) => {
    console.log('submit action');
    const { title, body, imageURL, price } = req.body;
    const post = await new shopPost({
      title,
      imageURL,
      price,
      body,
      _user: req.user.id,
      createAt: Date.now()
    });
    await post.save();
    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  });
};
