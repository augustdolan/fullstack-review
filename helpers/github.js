const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (req, res) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  return new Promise((resolve, reject) => {
    let options = {
      // url: 'https://api.github.com',
      headers: {
        'User-Agent': 'request',
        'Authorization': `token ${config.TOKEN}`
      }
    };

    axios.get(`https://api.github.com/users/${req.body.username}/repos`, options)
      .then((repos) => {
        resolve(repos.data)
      })
      .catch((err) => {
        reject('no such user');
      })
  })
}


module.exports.getReposByUsername = getReposByUsername;