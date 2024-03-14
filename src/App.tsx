import './App.css'
import Form from './components/Form.tsx'
import List from './components/List.tsx'
import Header from './components/Header.tsx'
import Action from './components/Action.tsx'

function App(): JSX.Element {
  return (
    <div className="app-container block rounded-lg bg-white shadow-secondary-1 drop-shadow-lg bg-surface-dark m-auto">
      <Header />
      <div className="p-5 px-6 w-full">
        <Form/>
        <Action />
        <List/>
      </div>
    </div>
  )
}

export default App
