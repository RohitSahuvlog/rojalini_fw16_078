import logo from './logo.svg';
import './App.css';
import Button from './Component/Button';

function App() {
  return (
    <div className="App">
      <Button x={"Primary Button"}/>
      <Button x={"Default Button"}/>
      <Button x={"Dashed Button"}/>
      <Button x={"Text Button"}/>
      <Button x={"Link Button"}/>
    </div>
  );
}

export default App;
