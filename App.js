import React from 'react';
import Navber from './Navber';
import { BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
const App =()=>{
  return(
    <div>
      <BrowserRouter>
  
     <Route path="/" exact component={Home}/> 
      <Route path="/about" exact component={About}/>

      <Navber/>
      </BrowserRouter>
    </div>
  )
}
export default App

