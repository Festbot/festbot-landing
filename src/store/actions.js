import {UPDATE_PLATFORM,UPDATE_ARTIST_LIST} from './actionTypes.js'


export const platformChange=(platform)=>{
  return {
    type: UPDATE_PLATFORM,
    payload: platform
  }
}

export const getArtist=(selector)=>{
  return {
    type: UPDATE_ARTIST_LIST,
    payload: result,
  }
}