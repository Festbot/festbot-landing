
import hu from './hu.json'

var translations = {}

export const setTexts = data => {
   translations = data
}

export const setLanguage = (lang) => {
  if (navigator.language.includes("hu") ) {
    setTexts(hu)
  } 
}

export const translate = (keyText) => {
  for (var key in translations) {
    if (key===keyText) {
      return translations[key]
    } 
  }
  return keyText
}

 
