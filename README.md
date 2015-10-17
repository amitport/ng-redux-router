#ng-redux-router

ngRedux bindings for Angular-Route - Keep your router state inside your ngRedux store.

- Maintains router state inside your store
- Use actions to transition your route instead of `$location`
- Use your store state to access route params instead of `$routeParams`

`npm install ng-redux-router`

**Documentation is currently work in progress, see [the example here](https://github.com/amitport/ng-redux-router/tree/master/example).**

Adapted from [redux-ui-router](https://github.com/neilff/redux-ui-router) by [Neil Fenton](https://github.com/neilff),
which was in turn heavily inspired by [Redux React Router](https://github.com/acdlite/redux-react-router) by [Andrew Clark](https://github.com/acdlite)

## Table of Contents

- [Reducer](#reducer)
- [Actions](#actions)
- [Middleware](#middleware)
- [Listener](#listener)
- [Example](#example)

## <a name="reducer">Reducer</a>

ngRedux Router includes a reducer which is responsible for managing the current route parameters inside your store.

### Usage:

Include this reducer by importing it from `ng-redux-router`:

```
import {combineReducers} from 'redux';
import {routerStateReducer} from 'ng-redux-router';
import myReducer from './myReducer';

const rootReducer = combineReducers({
  myReducer,
  router: routerStateReducer
});

export default rootReducer;
```

This will provide you the ability to tap into the current route parameters from `$route.current`. Typically route parameters would come from `$stateParams`, instead you will now use `state.router` to grab these parameters. This makes it easier when you derive new data from your store, or when you perform an action that requires a state parameter.

**Note:** This pattern will require you to enforce it yourself, there is nothing preventing you from using `$routeParams`.

In a controller or selector, we can now access the current route:

```
class SomeController {
  constructor($ngRedux,$scope) {
    let disconnect = $ngRedux.connect(state => ({router: state.router}))(this);
    ...
  }
}
```

**Note:** As of v0.4.0, Immutable.js is no longer used. To access router properties, use `router.currentParams[myParam]` instead of `router.getIn(['currentParams', 'myParam'])`.

## <a name="actions">Actions</a>

ngRedux Router includes several actions which mimic functionality that Angular Route provides. These actions should be used instead of interacting directly with `$location`. These actions can be imported directly from `ng-redux-router`.

### Usage:

#### setLocation(url)

This action create will trigger a $location.url in the router Middleware.

[Documentation Reference](https://docs.angularjs.org/api/ng/service/$location#url)

## <a name="middleware">Middleware</a>

ngRedux Router includes a middleware for performing `$location` interactions based on the above actions being fired. Whenever one of the above actions is fired, the corresponding `$location` function is called.

### Usage:

The middleware should be used when creating your ngRedux store, this should be done as follows:

```
  $ngReduxProvider.createStoreWith(reducers, [
    'myOtherMiddleware',
    'ngRouterMiddleware',
    thunk,
    logger
  ]);
```

For additional information, refer to the [ngRedux documentation](https://github.com/wbuchwalter/ng-redux#api).

## <a name="listener">Listener</a>

ngReudx UI Router provides a listener which taps into Angular Router's `$routeChangeStart`, `$routeChangeSuccess`, and `$routeChangeError` events. The listener is responsible for firing actions whenever one of these events occur. This allows us to track the state of the router whenever it is interacted with.

### Usage:

This listener is in the run block of the ngReduxRouter module. Including it in your app module will automatically set this up to begin listening to UI Router events.

```
// Import Angular
import angular from 'angular';
import ngRedux from 'ng-redux';
import ngReduxRouter from 'ng-redux-router';

// Import Angular Components
import components from './components';

// Import Configuration
import configNgReduxProvider from './config/ng-redux';

export default angular
  .module('myApp', [
    ngRedux,
    ngReduxRouter,
    components
  ])
  .config(configNgReduxProvider)
  .name;

```

## <a name="example">Example</a>

For a more complete example, take a look at [the example here](https://github.com/amitport/ng-redux-router/tree/master/example).

To run the example:

```
git clone https://github.com/amitport/ng-redux-router/
npm install
cd example
npm run start
```
