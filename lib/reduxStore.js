import { applyMiddleware } from "redux"
import { persistStore, persistCombineReducers } from "redux-persist"
import { composeWithDevTools } from "redux-devtools-extension"
import storage from "redux-persist/es/storage"
import Reactotron from "reactotron-react-native"
import createDebounce from "redux-debounced"
import reducers from "./reducers"
import apolloClient, { networkInterface } from "./apolloClient"
import { composeResetReducer } from "redux-reset-store"
import { reducer as formReducer } from "redux-form"

const store = Reactotron.createStore(
  persistCombineReducers(
    {
      key: "reduxState",
      storage
    },
    {
      ...reducers,
      form: composeResetReducer(formReducer, {}),
      apollo: composeResetReducer(apolloClient.reducer(), {
        data: {},
        optimistic: [],
        reducerError: null
      })
    }
  ),
  {},
  composeWithDevTools(
    applyMiddleware(createDebounce(), apolloClient.middleware())
  )
)

export default store
export const persistor = persistStore(store)

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {}
      }
      const token = store.getState().session.token
      if (token) {
        req.options.headers.authorization = token
      }
      next()
    }
  }
])
