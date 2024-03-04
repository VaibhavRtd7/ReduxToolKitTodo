import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
console.log("in app")
  return (
    <>  
      <h1 className='font-bold text-amber-600'>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
