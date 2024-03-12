import { add, showLengthError, clearError } from '../redux/actions.ts'
import { connect } from 'react-redux'

function Form({ add, showLengthError, clearError, error }): JSX.Element {
  let inputValue: string = ''

  function handleSubmit(e): void {
    // Prevent the browser from reloading the page
    e.preventDefault()

    // Read the form data
    const form = e.target
    const formData = new FormData(form)
    const task = formData.get('task')


    if (task && task.length > 6 && task.length < 64) {
      if (error) { clearError() }
      add(task)
    } else {
      showLengthError()
    }
  }

  function changeHandler(e): void {
    inputValue = e.target.value
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex mb-3 border-gray-700	border-2 rounded-md">
        <input
          type="text"
          name="task"
          defaultValue={inputValue}
          onChange={changeHandler}
          className="align-bottom bg-transparent py-2.5 pl-4 pr-12 text-base text-slate-900 placeholder:text-slate-600 outline-none w-4/5"/>
        <button className="text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700 w-1/5">Add Task</button>
      </form>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  )
}

const mapStateToProps = (state: any): { error: string } => ({
  error: state.error
})

const mapDispatchToProps = {
  add,
  showLengthError,
  clearError
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)