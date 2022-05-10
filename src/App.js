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

            <Route exact path="/" element={<Home />} />
            
            <Route exact path="create" element={<Create />} />

            <Route exact path="/blogs/:id" element={<BlogDetails />} />

            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App