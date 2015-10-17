import angular from 'angular';
import ngRoute from 'angular-route';

import routeChangeActions from './route-change-actions';
import routerMiddleware from './router-middleware';
import routerListener from './router-listener';

import routerStateReducer from './router-state-reducer';
import setLocation from './set-location';

export default angular
  .module('ng-redux-router', [ngRoute])
  .factory('ngRouteChangeActions', routeChangeActions)
  .factory('ngRouterMiddleware', routerMiddleware)
  .run(routerListener)
  .name;

export {routerStateReducer};

export const routerActions = {setLocation};
