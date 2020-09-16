import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import myFunc from './models/repos.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount() {
    this.getTopRepos();
      // .then((newRepos) => {
      //   console.log('this is new repos: ', JSON.stringify(newRepos));
      //   this.setState({
      //     repos: newRepos
      //   })
      // })
  }

  getTopRepos() {
    let getRepos = () => {
      return new Promise((resolve, reject) => {
        $.ajax({
          type: "GET",
          url: '/repos',
          success: function(result) {
            resolve(result);
          },
          contentType: 'application/json'
        });
      });
    }
    getRepos()
      .then((newRepos) => {
        console.log('this is new repos: ', JSON.stringify(newRepos));
        this.setState({
          repos: newRepos
        })
      })
  }

  search (term) {
    let test = this.getTopRepos.bind(this);
    console.log(test);
      $.ajax({
        type: "POST",
        url: '/repos',
        data: JSON.stringify({username: term}),
        success: function() {
          test()
        },
        contentType: 'application/json'
      })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));