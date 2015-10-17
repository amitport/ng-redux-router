/**
 * Listens for events emitted from Angular Router and fires redux events
 *
 * @param {object} $rootScope Dependency
 * @param {object} ngRouteChangeActions Dependency
 */
export default function routerListener($rootScope, ngRouteChangeActions) {
  $rootScope.$on('$routeChangeStart', ngRouteChangeActions.onRouteChangeStart);
  $rootScope.$on('$routeChangeSuccess', ngRouteChangeActions.onRouteChangeSuccess);
  $rootScope.$on('$routeChangeError', ngRouteChangeActions.onRouteChangeError);
}

routerListener.$inject = [
  '$rootScope',
  'ngRouteChangeActions'
];

