import { createStore } from 'redux'
import todoReducer from './reducer'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const store = createStore(todoReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store