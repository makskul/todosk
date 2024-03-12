interface Item {
  text: string
  status: boolean
}

export enum Types {
  addNew = 'ADD_NEW',
  getAll = 'GET_ALL',
  filterComplete = 'FILTER_COMPLETE',
  filterCurrent = 'FILTER_CURRENT',
  countCompleted = 'COUNT_COMPLETED',
  countCurrent = 'COUNT_CURRENT',
  lengthError = 'LENGTH_ERROR',
  clearError = 'CLEAR_ERROR'
}

export interface ActionType {
  type: string
  payload?: string | number | null
}

export interface AppState {
  items: Array<Item>
  countCurrent: number
  countCompleted: number
  filter: string
  error: string | null
}