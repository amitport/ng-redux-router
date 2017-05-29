import {SET_LOCATION} from './action-types';

export default function routerMiddleware($location) {
  return (store) => (next) => (action) => {
    if (action.type === SET_LOCATION) {
      $location.url(action.payload);
    }
    return next(action);
  };
}

routerMiddleware.$inject = ['$location'];
