import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from "./auth/auth.slice";
import storage from "redux-persist/lib/storage";
import { websiteReducer } from "./website";
import { tableSizeReducer } from "./tableSize/tableSizeSlice";
import { mqttReducer } from "./mqtt";
import { notificationReducer } from "./notification";
import { sidebarReducer } from "./sidebar";
import { filterReducer } from "./filterParams";
import { tableReducer } from "./table";

const authPersistConfig = {
  key: "auth",
  storage,
};

const tableSizePersistConfig = {
  key: "tableSize",
  storage,
};

const notificationPersistConfig = {
  key: "notificationReducer",
  storage,
};

const sidebarPersistConfig = {
  key: "sidebar",
  storage,
};

const filterPersistConfig = {
  key: "filter",
  storage,
};

const tablePersistConfig = {
  key: "table",
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  tableSize: persistReducer(tableSizePersistConfig, tableSizeReducer),
  notification: persistReducer(notificationPersistConfig, notificationReducer),
  sidebar: persistReducer(sidebarPersistConfig, sidebarReducer),
  filter: persistReducer(filterPersistConfig, filterReducer),
  table: persistReducer(tablePersistConfig, tableReducer),
  website: websiteReducer,
  mqtt: mqttReducer,
});

export default rootReducer;
