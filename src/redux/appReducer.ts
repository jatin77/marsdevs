import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import pageReducer from "./page/page.reducer";

const persistConfig = {
  key: "marsdevs",
  storage,
  whiteList: [],
};

const appReducer = combineReducers({
  page: pageReducer,
});

export default persistReducer(persistConfig, appReducer);
