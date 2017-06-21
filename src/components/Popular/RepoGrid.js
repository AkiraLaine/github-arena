import React from 'react'
import PropTypes from 'prop-types'

const RepoGrid = props => {
  return (
    <ul className='popular-grid'>
      {
        props.repos.map((repo, index) => (
          <li key={repo.name} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul>
              <li>
                <img className='avatar' src={repo.owner.avatar_url} />
              </li>
              <li><a href={repo.html_url}>{repo.name}</a></li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count} stars</li>
            </ul>
          </li>
        ))
      }
    </ul>
  )
}

RepoGrid.propTypes = {
  repos: PropTypes.array.isRequired
}

export default RepoGrid