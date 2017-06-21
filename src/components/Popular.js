import React from 'react'
import SelectLanguage from './Popular/SelectLanguage'
import { fetchPopularRepos } from '../utils/api'
import RepoGrid from './Popular/RepoGrid'

class Popular extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedLang: 'All',
      repos: null
    }
    
    this.updateLanguage = this.updateLanguage.bind(this)
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLang)
  }

  updateLanguage (lang) {
    this.setState({
      selectedLang: lang,
      repos: null
    })

    fetchPopularRepos(lang)
      .then(repos => {
        this.setState({ repos })
      })
  }

  render () {
    return (
      <div>
        <SelectLanguage selectedLang={this.state.selectedLang} onSelect={this.updateLanguage} />
        {
          this.state.repos ?
            <RepoGrid repos={this.state.repos} /> :
            <p>Loading</p>
        }
      </div>
    )
  }
}

export default Popular