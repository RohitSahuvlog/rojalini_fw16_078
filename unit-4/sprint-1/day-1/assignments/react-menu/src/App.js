import './App.css';
import {List1, List2} from './Assignment1/List'
import JoinUs from './Assignment2/JoinUs'
import Settings from './Assignment2/Settings'
import Login from './Assignment2/Login'
import ContactUs from './Assignment2/ContactUs'
import Search from './Assignment2/Search'
import Help from './Assignment2/Help'
import Home from './Assignment2/Home'
import Download from './Assignment2/Download'


function App() {
  return (
    <>
    <div className="App">
      <List1/>
      <List2/>
    </div>
    <div className="buttons">
      <JoinUs/>
      <Settings/>
      <Login/>
      <ContactUs/>
      <Search/>
      <Help/>
      <Home/>
      <Download/>
    </div>
    </>
  );
}

export default App;
