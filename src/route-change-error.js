import {ROUTE_CHANGE_ERROR} from './action-types';

/**
 * @param {Object} event event details
 * @param {Object} current current route
 * @param {Object} previous previous route
 * @param {Object} rejection error description
 * @return {Object} Action object
 */
export default function onRouteChangeError(event, current, previous, rejection) {
  return {
    type: ROUTE_CHANGE_ERROR,
    payload: {event, current, previous, rejection},
  };
}
