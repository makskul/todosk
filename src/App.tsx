import './App.css'
import Form from './components/Form.tsx'
import Filters from './components/Filters.tsx'
import List from './components/List.tsx'

function App(): JSX.Element {
  return (
    <div className="app-container block rounded-lg bg-white shadow-secondary-1 drop-shadow-lg bg-surface-dark m-auto">
      <header className="pt-4 pb-4">
        <p className="text-2xl text-cyan-500 font-bold">{'tasker'.toUpperCase()}</p>
      </header>
      <div className="p-5 px-6 w-full">
        <Form/>
        <h1 className="text-left text-lg font-semibold mt-3.5 mb-3">{'My notes'}</h1>

        <Filters />
        <List/>
      </div>
    </div>
  )
}

export default App
