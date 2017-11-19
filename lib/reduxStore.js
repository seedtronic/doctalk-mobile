import { applyMiddleware } from "redux"
import { persistStore, persistCombineReducers } from "redux-persist"
import storage from "redux-persist/es/storage"
import Reactotron from "reactotron-react-native"
import createDebounce from "redux-debounced"
import reducers from "./reducers"
import apolloClient from "./apolloClient"

const reduxPersistConfig = {
  key: "reduxState",
  storage
}

const store = Reactotron.createStore(
  persistCombineReducers(reduxPersistConfig, {
    ...reducers,
    apollo: apolloClient.reducer()
  }),
  {},
  applyMiddleware(createDebounce(), apolloClient.middleware())
)

export default store
export const persistor = persistStore(store)
