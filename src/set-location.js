import {SET_LOCATION} from './action-types';

/**
 * This action create will trigger a $state.go in the UiRouter Middleware.
 * Accepts a payload which matches the UI Router $state.go function.
 *
 * @param  {String} to - State name
 * @param  {Object} params - (optional) Parameters to send with state
 * @param  {Object} options - (optional) Options object
 * @return {Object} Action object
 */
export default function setLocation(url) {
  return {
    type: SET_LOCATION,
    payload: url,
  };
}
