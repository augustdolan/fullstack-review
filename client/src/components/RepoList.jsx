import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (

  <div>
    <h4> Repo List Component</h4>
    <div>There are {props.repos.length} repos.</div>
    {props.repos.map((repo) => <RepoListEntry repo={repo}/>)}
  </div>
)

export default RepoList;