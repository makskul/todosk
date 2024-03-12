import { Types, ActionType, AppState } from '../types/Types.ts'

const initialState: AppState = {
  items: [],
  countCurrent: 0,
  countCompleted: 0,
  filter: 'ALL',
  error: null,
}

const todoReducer = (state= initialState, action: ActionType): AppState => {
  switch (action.type) {
    case Types.addNew:
      return { ...state, items: [...state.items, { txt: action.payload, status: false } ] }
    case Types.lengthError:
      return { ...state, error: action.payload}
    case Types.clearError:
      return { ...state, error: null}
    default:
      return state
  }
}

export default todoReducer