import Filters from './Filters.tsx'

function Header(): JSX.Element {
  return (
    <div className="relative flex justify-between items-start mt-3.5 mb-3">
      <h1 className="text-left text-lg font-semibold inline-block">{'My notes'}</h1>
      <Filters/>
    </div>
  )
}

export default Header