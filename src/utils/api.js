import axios from 'axios'

const getProfile = username => {
  return axios.get('https://api.github.com/users/' + username)
    .then(response => response.data)
}

const getRepos = username => {
  return axios.get('https://api.github.com/users/' + username + '/repos?per_page=100')
}

const getStarCount = (repos) => {
  return repos.data.reduce((curr, acc) => {
    return curr + acc.stargazers_count
  }, 0)
}

const calculateScore = (profile, repos) => {
  const followers = profile.followers
  const totalStars = getStarCount(repos)

  return (followers * 3) + totalStars
}

const handleError = error => {
  console.warn(error)
  return
}

const getUserData = player => {
  return axios.all([getProfile(player), getRepos(player)])
    .then(data => {
      const profile = data[0]
      const repos = data[1]

      return {
        profile,
        score: calculateScore(profile, repos)
      }
    })
}

const sortPlayers = (players) => players.sort((a, b) => b.score - a.score)

module.exports = {
  fetchPopularRepos (language) {
    const encodedURL = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories')
    return axios.get(encodedURL)
      .then(response => response.data.items)
  },
  battle (players) {
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  }
}