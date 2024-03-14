import { connect } from 'react-redux'
import { itemToggle, countTasks } from '../redux/actions.ts'
import { Item } from '../types/Types.ts'

interface PropsType {
  data: Item
  index: number
  itemToggle: (index: number) => void
  countTasks: () => void
}

function ListItem ({ data, index, itemToggle, countTasks }: PropsType): JSX.Element {
  function clickHandler(index: number): void {
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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export default connect(null, mapDispatchToProps)(ListItem)