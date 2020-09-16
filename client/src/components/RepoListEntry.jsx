import React from 'react';

const RepoListEntry = (props) => (
  <div>
    <h1>filename: {props.repo.full_name}</h1>
    <div>link: {props.repo.html_url}</div>
    <div>repo id: {props.repo.id}</div>
    <div>fork count: {props.repo.forks_count}</div>
    <div>stargazers count: {props.repo.stargazers_count}</div>
    <div>date created: {props.repo.created_at}</div>
  </div>
);


export default RepoListEntry;