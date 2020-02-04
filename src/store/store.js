import {
  applyMiddleware, createStore, combineReducers, compose,
} from 'redux';
import { connectRoutes } from 'redux-first-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import routesMap from '../routesMap';
import * as reducers from '../reducers';


export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);
  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(promise(), thunk, logger, middleware);
  const enhancers = compose(enhancer, middlewares);
  const store = createStore(rootReducer, preloadedState, enhancers);
  return { store };
}
