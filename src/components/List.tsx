import { connect } from 'react-redux'
import {AppState, Item} from '../types/Types.ts'
import ListItem from './ListItem.tsx'

interface PropsType {
  items: Array<Item>
}

function List ({ items }: PropsType): JSX.Element {
  return (
    <>
      <ul className="list-none">
        {items.map((item: Item, index: number) =>
          <ListItem data={item} index={index} />
        )}
      </ul>
    </>
  )
}

const mapStateToProps = (state: AppState): PropsType => ({
  items: state.items
})

export default connect(mapStateToProps)(List)

