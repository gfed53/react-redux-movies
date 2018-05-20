import * as types from '../constants/ActionTypes'

export const updateSearchBar = text => ({
  type: types.UPDATE,
  payload: text
});