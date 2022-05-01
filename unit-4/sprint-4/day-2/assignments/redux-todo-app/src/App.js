import logo from './logo.svg';
import './App.css';
import Counter from './componenets/Counter';
import Todo from './componenets/Todo';
import { Route, Routes } from 'react-router-dom';
import { SingleTodo } from './componenets/SingleTodo';
import { Navbar } from './componenets/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        {/* <Route path="/" element={<>}></Route> */}
        <Route path="/" element={<Todo/>}/>
        <Route path="/:todo" element={<SingleTodo/>}/>
      </Routes>
    </div>
  );
}

export default App;
