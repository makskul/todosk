import { connect } from 'react-redux'
import { itemToggle, countTasks } from '../redux/actions.ts'

function ListItem ({ data, index, itemToggle, countTasks }): JSX.Element {
  function clickHandler(index): void {
    itemToggle(index)
    countTasks()
  }

  return (
    <li
      onClick={() => clickHandler(index)}
      key={index}
      className={
        `w-full border rounded-md shadow text-left p-4 mb-3 cursor-pointer${data.status ? ' bg-green-200 border-green-200':' bg-gray-200 border-gray-200'}${data.show ? ' block' : ' hidden'}`
      }
    >
      {data.txt}
    </li>
  )
}

const mapDispatchToProps = {
  itemToggle,
  countTasks
}

export default connect(null, mapDispatchToProps)(ListItem)