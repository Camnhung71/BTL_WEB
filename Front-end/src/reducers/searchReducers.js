const {
    SEARCH_KEYWORD_REQUEST,
    SEARCH_KEYWORD_SUCCESS,
    SEARCH_KEYWORD_FAIL,

  } = require('../constants/searchConstants');

export const searchKeywordReducer =  (
    state = { loading: true, products: [] },
    action
  ) => {
    switch (action.type) {
        case SEARCH_KEYWORD_REQUEST:
            return {loading: true};
        case SEARCH_KEYWORD_SUCCESS: 
            return {loading: false, products: action.payload};
        case SEARCH_KEYWORD_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
};