import './App.css';
import CompShowBlogs from './blog/ShowBlog'
import CompCreateBlog from './blog/CreteBlog'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CompEditBlog from './blog/EditBlog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <CompShowBlogs />} />
                <Route path='/create' element={ <CompCreateBlog />} />
                <Route path='edit/:id' element={ <CompEditBlog /> } />
            </Routes>
        </BrowserRouter> 
               
      </header>
    </div>
  );
}

export default App;
