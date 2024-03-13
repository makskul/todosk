import { Types, ActionType } from '../types/Types.ts'

const LENGTH_ERROR = 'Please write your message between 6 and 64 symbols'

export const add = (item: string) : ActionType => ({
  type: Types.addNew,
  payload: item
})

export const showLengthError = () : ActionType => ({
  type: Types.lengthError,
  payload: LENGTH_ERROR
})

export const clearError = (): ActionType => ({
  type: Types.clearError
})

export const itemToggle = (index: number) : ActionType => ({
  type: Types.itemToggle,
  payload: index
})

export const setFilter = (filter: string) : ActionType => ({
  type: Types.setFilter,
  payload: filter
})

export const countTasks = (filter: string) : ActionType => ({
  type: Types.countTasks,
  payload: filter
})