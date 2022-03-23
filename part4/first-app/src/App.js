import logo from './logo.svg';
import './App.css';
//import Component Hello vào để sử dụng 
import {Hello, HelloC} from'./components/Hello'
//gọi đến component như một thẻ thông thường
function App() {
  return (
    <div className="App">
      <Hello name = "SOMEONE"/>
      <HelloC/>
    </div>
  );
}

export default App;

