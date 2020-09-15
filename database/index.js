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

let save = (repos) => {
  // TODO: Your code here
  // console.log('save is running', Repo.findOne, Repo.insertMany)
  // This function should save a repo or repos to
  // the MongoDB
  Repo.find({}, null, {lean: true})
    .then((results) => {
      console.log(results);
    })
    // .then((results) => {
    //   // console.log('mongoose method is running');
    //   console.log(results.forEach((result) => {
    //     console.log('oppsy daisy', result);
    //   }))
    // })
//   Repo.find()
//     .then((results) => {
//       // console.log('hello world', results);
//     })

}

module.exports.save = save;