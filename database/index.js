const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: Number,
  full_name: String,
  html_url: String,
  created_at: Date,
  forks_count: Number,
  stargazers_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);
// const instance = new Repo();
// instance.save (function (err) {
//   console.log(err);
// })
// console.log('this is the instance, ', instance);
// const instance = new Repo();
// instance.my.key = 'hello';
// instance.save(function (err) {
//   //
// });

let getTopRepos = () => {
  return new Promise((resolve, reject) => {
    Repo.find().sort({'forks_count': -1}).lean()
      .then((results) => {
        resolve(results);
      })
      .catch((err) => {
        reject(results);
      })
  })
};

let save = (repos) => {
  repos.forEach((repo) => {
    Repo.findOne({id: repo.id})
      .then((result) => {
        if (result) {
        } else {
          Repo.insertMany(repo)
      }
    })
  })
};
module.exports.save = save;
module.exports.getTopRepos = getTopRepos;