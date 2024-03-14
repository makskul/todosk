import { connect } from 'react-redux'
import { setFilter } from '../redux/actions.ts'
import {AppState, FilterType} from '../types/Types.ts'

function Filters ({ setFilter, state }: { setFilter: (param: string) => void, state: AppState }): JSX.Element {
  function clickHandler(e: React.MouseEvent<HTMLElement>, filter: string): void {
    e.preventDefault()

    setFilter(filter)
  }

  return (
    <div>
      <p>
        <a
          onClick={(e)=>clickHandler(e, FilterType.all)}
          href={'#'}
          className={state.filter === FilterType.all && state.items.length ? 'text-cyan-600' : ''}
        >all</a>&nbsp;
        /&nbsp;<a
          onClick={(e)=>clickHandler(e, FilterType.current)}
          href={'#'}
          className={state.filter === FilterType.current && state.items.length ? 'text-cyan-600' : ''}
        >current</a>&nbsp;
        /&nbsp;<a
          onClick={(e)=>clickHandler(e, FilterType.completed)}
          href={'#'}
          className={state.filter === FilterType.completed && state.items.length ? 'text-cyan-600' : ''}
        >completed</a>
      </p>
      <div className="text-right text-sm mt-1 text-gray-600">
        <span className="mr-1.5">Current: {state.countCurrent}</span>&nbsp;<span>Completed: {state.countCompleted}</span>
      </div>
    </div>
  )
}

const mapStateToProps = (state: AppState): { state: AppState } => ({
  state
})

const mapDispatchToProps = {
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)

