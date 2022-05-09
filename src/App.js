import React from 'react'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App(){
  return(
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Routes>

            <Route exact path="/">
              <Home /> 
            </Route>
            
            <Route path="create">
              <Create />  
            </Route>  

            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App