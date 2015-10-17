import { ROUTE_CHANGE_SUCCESS } from './action-types';

/**
 * @param {Object} event event details
 * @param {Object} current current route
 * @param {Object} previous previous route
 * @return {Object} Action object
 */
export default function onRouteChangeSuccess(event, current, previous) {
  return {
    type: ROUTE_CHANGE_SUCCESS,
    payload: {event, current, previous}
  };
}
