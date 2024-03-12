import { connect } from 'react-redux'

function List ({ items }): JSX.Element {
  return (
    <>
      <div>
        {items.map((item, index) =>
          <li key={index}>{item.txt}</li>
        )}
      </div>
    </>
  )
}

const mapStateToProps = (state: any): {items: string} => ({
  items: state.items
})

export default connect(mapStateToProps)(List)

