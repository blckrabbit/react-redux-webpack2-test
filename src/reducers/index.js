import { combineReducers } from 'redux';

import { home } from './home';
import { search } from './search'

/**
 * Routing to be implemented
 */
export default combineReducers({
  home,
  search
});
