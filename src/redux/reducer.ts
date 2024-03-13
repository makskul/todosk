import { Types, ActionType, AppState, Item, FilterType } from '../types/Types.ts'

const initialState: AppState = {
  items: [],
  countCurrent: 0,
  countCompleted: 0,
  filter: 'ALL',
  error: ''
}

const setFilter = (state: AppState, type: string): AppState => {
  return {
    ...state,
    filter: type,
    items: state.items.map((item: Item) => {
      switch (type) {
        case FilterType.all:
          return { ...item, show: true }
        case FilterType.current:
          return { ...item, show: !item.status }
        case FilterType.completed:
          return { ...item, show: item.status }
        default:
          item
      }
      return item
    })
  }
}

const todoReducer = (state= initialState, action: ActionType): AppState => {
  switch (action.type) {
    case Types.addNew:
      return { ...state, items: [...state.items, { txt: action.payload, status: false, show: true } ] }
    case Types.lengthError:
      return { ...state, error: action.payload}
    case Types.clearError:
      return { ...state, error: null}
    case Types.itemToggle:
      return {
        ...state,
        items: state.items.map((item, i) => {
          if (i === action.payload) {
            return { ...item, status: !item.status }
          }
          return item
        })
      }
    case Types.setFilter: {
      return setFilter(state, action.payload as string)
    }
    case Types.countTasks: {
      return {
        ...state,
        countCurrent: state.items.filter((x) => !x.status).length,
        countCompleted: state.items.filter((x) => x.status).length,
      }
    }
    default:
      return state
  }
}

export default todoReducer