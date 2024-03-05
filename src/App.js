
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    function loggin(){
      console.log("hello")
    }
    loggin()
  },[])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
