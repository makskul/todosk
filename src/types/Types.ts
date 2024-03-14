export interface Item {
  txt: string | number | null | undefined
  status: boolean
  show?: boolean
}

export enum FilterType {
  all = 'ALL',
  current = 'CURRENT',
  completed = 'COMPLETED'
}

export enum Types {
  addNew = 'ADD_NEW',
  setFilter = 'SET_FILTER',
  countTasks = 'COUNT_TASKS',
  lengthError = 'LENGTH_ERROR',
  clearError = 'CLEAR_ERROR',
  itemToggle = 'ITEM_TOGGLE'
}

export interface ActionType {
  type: string
  payload?: string | number | null | undefined
}

export interface AppState {
  items: Array<Item>
  countCurrent: number
  countCompleted: number
  filter: string
  error: string
}