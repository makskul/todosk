import { connect } from 'react-redux'

function Filters ({ items }): JSX.Element {
  return (
    <>
      <p>all / current /completed</p>
    </>
  )
}

const mapStateToProps = (state: any): {items: string} => ({
  items: state.items
})

export default connect(mapStateToProps)(Filters)

