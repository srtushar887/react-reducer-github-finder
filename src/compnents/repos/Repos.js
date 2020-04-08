import React from 'react';
import RepoItem from './Repoitem';
import PropTypes from 'prop-types';
const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id}></RepoItem>)
};

Repos.propTypes = {
    repos : PropTypes.array.isRequired
}

export default Repos;