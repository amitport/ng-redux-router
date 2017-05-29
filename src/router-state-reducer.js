import {ROUTE_CHANGE_SUCCESS} from './action-types';

const INITIAL_STATE = {
  currentState: {},
  currentParams: {},
  prevState: {},
  prevParams: {},
};

/**
 * Reducer of ROUTE_CHANGE_SUCCESS actions. Returns a state object
 * with { currentState, currentParams, prevState, prevParams }
 *
 * @param  {Object} state - Previous state
 * @param  {Object} action - Action
 * @return {Object} New state
 */
export default function routerStateReducer(state = INITIAL_STATE, action) {
  return action.type === ROUTE_CHANGE_SUCCESS
    ? {current: action.payload.current, previous: action.payload.previous}
    : state;
}
