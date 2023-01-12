import { applyMiddleware, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import { persistStore } from "redux-persist";
import { PURGE } from "redux-persist/es/constants";
import thunk from "redux-thunk";
import appReducer from "./appReducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = (state: any, action: any) => {
  if (action.type === PURGE) {
    state = undefined;
  }
  return appReducer(state, action);
};

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

// Re-initialize redux states
export const clearReduxData = async () => {
  const persistor = persistStore(store);
  await persistor.purge();
};

clearReduxData();

export { store, persistor };
