import Reactotron from "reactotron-react-native"
import { reactotronRedux } from "reactotron-redux"

export default Reactotron.configure()
  .useReactNative()
  .use(reactotronRedux())
  .connect()
