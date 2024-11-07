import Hello from "./components/hello";
import Ggg from './components/answerComponnent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import NoghtehT from "./components/noghtehT";

function App() {
  return ( 
    <div dir="rtl">
      <Router>  
      <Routes>  
        <Route path="/"  element={<Hello/>} />   
        <Route path="/FT/:number"  element={<Ggg/>} />   
        <Route path="/go-to"  element={<NoghtehT/>} />   
      </Routes>  
    </Router> 
    </div>
      
  );
}

export default App;
