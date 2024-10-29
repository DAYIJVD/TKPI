import Hello from "./components/hello";
import Ggg from './components/answerComponnent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
function App() {
  return ( 
    <div dir="rtl">
      <Router>  
      <Routes>  
        <Route path="/"  element={<Hello/>} />   
        <Route path="/go-to-func"  element={<Ggg/>} />   
      </Routes>  
    </Router> 
    </div>
      
  );
}

export default App;
