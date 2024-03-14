import { connect } from 'react-redux'
import {AppState, Item} from '../types/Types.ts'
import ListItem from './ListItem.tsx'

interface PropsType {
  items: Array<Item>
}

function List ({ items }: PropsType): JSX.Element {
  return (
    <>
      <div className="tasks-container max-h-96 overflow-y-auto p-1.5">
        <ul className="list-none">
          {items.map((item: Item, index: number) =>
            <ListItem data={item} index={index}/>
          )}
        </ul>
      </div>
    </>
  )
}

const mapStateToProps = (state: AppState): PropsType => ({
  items: state.items
})

export default connect(mapStateToProps)(List)

