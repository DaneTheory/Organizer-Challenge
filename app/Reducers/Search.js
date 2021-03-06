/* =========================================================
                    SEARCH LISTS REDUCER
============================================================ */
import * as types from '../Constants/ActionTypes';


const initialState = {
  searchType: '',
  title: ''
};

const Search = function(state = initialState, action) {
  switch(action.type) {

    case types.LOAD_SEARCH_LAYOUT:
      return Object.assign({}, state, {
        searchType: action.searchType,
        title: action.title
      });
  }
  return state;
}

export default Search;
