// Event Actions
import onRouteChangeStart from './route-change-start';
import onRouteChangeSuccess from './route-change-success';
import onRouteChangeError from './route-change-error';

import { bindActionCreators } from 'redux';

export default function routeChangeActions($ngRedux) {
  let actionCreator = {
    onRouteChangeStart,
    onRouteChangeSuccess,
    onRouteChangeError
  };

  return bindActionCreators(actionCreator, $ngRedux.dispatch);
}

routeChangeActions.$inject = ['$ngRedux'];
