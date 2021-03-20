import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

const logger = createLogger({
    collapsed: true,
});

const middleware = applyMiddleware(reduxThunk, logger);

export const store = createStore(rootReducer, middleware);
