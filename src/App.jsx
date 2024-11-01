import Hello from "./components/hello";
import Ggg from './components/answerComponnent'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import NoghtehT from "./components/noghtehT";
import Anm from "./components/answerComponnent2"
function App() {
  return ( 
    <div dir="rtl">
      <Router>  
      <Routes>  
        <Route path="/"  element={<Hello/>} />   
        <Route path="/FT/:number"  element={<Ggg/>} />   
        <Route path="/anm/:number"  element={<Anm/>} />   
        <Route path="/go-to"  element={<NoghtehT/>} />   
      </Routes>  
    </Router> 
    </div>
      
  );
}

export default App;
