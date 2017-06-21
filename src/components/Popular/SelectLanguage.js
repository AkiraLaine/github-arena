import React from 'react'
import PropTypes from 'prop-types'

const SelectLanguage = props => {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='languages'>
      {
        languages.map(language => (
          <li 
            key={language}
            onClick={props.onSelect.bind(null, language)}
            style={
              language === props.selectedLang ? {color: '#D0021B'} : null
            }
            >{language}</li>
        ))
      }
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SelectLanguage