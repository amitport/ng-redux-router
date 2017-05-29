import {ROUTE_CHANGE_START} from './action-types';

/**
 * @param {Object} event event details
 * @param {Object} next next route
 * @param {Object} current current route
 * @return {Object} Action object
 */
export default function onRouteChangeStart(event, next, current) {
  return {
    type: ROUTE_CHANGE_START,
    payload: {event, next, current},
  };
}
