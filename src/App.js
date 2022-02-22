import {Routes, Route} from 'react-router-dom'
import {TodoList} from './components/TodoList'

function App() {
  return (
    <>
     <Routes>
       <Route exact path='/' element={<TodoList/>} />
     </Routes>
    </>
  );
}

export default App;
