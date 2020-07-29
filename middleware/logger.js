export default (store) => (next) => (action) => {
  console.group(action.type)
  console.log('The action: ', action)
  const valueFromDispatch = next(action)
  console.log('The modified state: ', store.getState())
  console.groupEnd()
  return valueFromDispatch
}
