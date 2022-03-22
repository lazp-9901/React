import logo from './logo.svg';
import './App.css';
//import Component Hello vào để xử dụng 
import Hello from'./components/Hello'
//gọi đến component như một thẻ thông thường
function App() {
  return (
    <div className="App">
      <Hello name = "SOMEONE"/>
    </div>
  );
}

export default App;

