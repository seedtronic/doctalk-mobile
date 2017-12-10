import { lifecycle } from "recompose"

export default function withWatchProp(propName, onChangeFromProps) {
  return lifecycle({
    componentWillReceiveProps(nextProps) {
      if (this.props[propName] !== nextProps[propName]) {
        onChangeFromProps(nextProps)(nextProps[propName])
      }
    }
  })
}
