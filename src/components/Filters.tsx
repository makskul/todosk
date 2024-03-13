import { connect } from 'react-redux'
import { setFilter } from '../redux/actions.ts'
import {AppState, FilterType} from '../types/Types.ts'

function Filters ({ setFilter, filter, items }: any): JSX.Element {
  function clickHandler(e, filter: string): void {
    e.preventDefault()

    setFilter(filter)
  }

  return (
    <>
      <p>
        <a
          onClick={(e)=>clickHandler(e, FilterType.all)}
          href={'#'}
          className={filter === FilterType.all && items.length ? 'text-cyan-600' : ''}
        >all</a>&nbsp;
        /&nbsp;<a
          onClick={(e)=>clickHandler(e, FilterType.current)}
          href={'#'}
          className={filter === FilterType.current && items.length ? 'text-cyan-600' : ''}
        >current</a>&nbsp;
        /&nbsp;<a
          onClick={(e)=>clickHandler(e, FilterType.completed)}
          href={'#'}
          className={filter === FilterType.completed && items.length ? 'text-cyan-600' : ''}
        >completed</a>
      </p>
    </>
  )
}

const mapStateToProps = (state: AppState): any => ({
  filter: state.filter,
  items: state.items
})

const mapDispatchToProps = {
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)

