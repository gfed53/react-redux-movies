import { combineReducers } from 'redux'

// Controls text within search bar.
export const searchBarText = (state='',action) => {
  switch (action.type){
    case 'UPDATE':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  searchBarText
})