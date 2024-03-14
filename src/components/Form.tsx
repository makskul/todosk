import { add, showLengthError, clearError, countTasks } from '../redux/actions.ts'
import { connect } from 'react-redux'
import { useState } from 'react'
import { AppState } from '../types/Types.ts'

interface PropsType {
  add: (param: FormDataEntryValue) => void
  countTasks: () => void
  showLengthError: () => void
  clearError: () => void
  error: string
}

function Form({ add, countTasks, showLengthError, clearError, error }: PropsType): JSX.Element {
  const [value, setValue] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    // Prevent the browser from reloading the page
    e.preventDefault()

    // Read the form data
    const form = e.currentTarget
    const formData = new FormData(form)
    const task: string = formData.get('task') as string

    if (task && task.length > 6 && task.length < 64) {
      if (error) { clearError() }
      add(task)
      countTasks()
      setValue('')
    } else {
      showLengthError()
    }
  }

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex mb-3 border-gray-700	border-2 rounded-md">
        <input
          type="text"
          name="task"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeHandler(e)}
          className="align-bottom bg-transparent py-2.5 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 outline-none w-4/5"/>
        <button className="text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 w-1/5">Add Task</button>
      </form>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  )
}

const mapStateToProps = (state: AppState): { error: string } => ({
  error: state.error
})

const mapDispatchToProps = {
  add,
  showLengthError,
  clearError,
  countTasks
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default connect(mapStateToProps, mapDispatchToProps)(Form)