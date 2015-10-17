import angular from 'angular';
import ngRoute from 'angular-route';

import ngRedux from 'ng-redux';
import {combineReducers} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import ngReduxRouter from '../src';

import {
  routerStateReducer,
  routerActions
}
from '../src';

export default angular
  .module('demoApp', [
    ngRoute,
    ngRedux,
    ngReduxRouter
  ])
  .controller('MainController', ($scope, $ngRedux) => {
    $scope.globalState = {};

    $scope.$on('$destroy', $ngRedux.connect(state => {
      return {
        globalState: state
      };
    })($scope));
  })
  .config(($routeProvider) => {
    $routeProvider
      .when('/children/:childId', {
        template: `
          <div class="child-view">
            <h2>Child View childId</h2>
            <button ng-click="setLocation('children/1')">setLocation('children/1')</button>
            <button ng-click="setLocation('children/2')">setLocation('children/2')</button>
          </div>
        `,
        controller: ($scope, $ngRedux) => {
          $scope.$on('$destroy', $ngRedux.connect(null, routerActions)($scope))
        }
      })
    .otherwise({
      redirectTo: '/children/1'
    })
  })
  .config(($ngReduxProvider) => {
    const logger = createLogger({
      level: 'info',
      collapsed: true
    });

    const reducers = combineReducers({
      router: routerStateReducer
    });

    $ngReduxProvider.createStoreWith(reducers, ['ngRouterMiddleware', logger, thunk]);
  })
  .name;
