import React from 'react'
import CompShowBlogs from '../blog/ShowBlog'
import CompCreateBlog from '../blog/CreteBlog'
import CompEditBlog from '../blog/EditBlog';
import {Link} from 'react-router-dom'
import { BrowserRouter, Route, Routes, SW as Switch } from 'react-router-dom';
/*
232
   <BrowserRouter>
            <Routes>
                <Route path='/' element={ <CompShowBlogs />} />
                <Route path='/create' element={ <CompCreateBlog />} />
                <Route path='edit/:id' element={ <CompEditBlog /> } />
            </Routes>
        </BrowserRouter> 
https://www.youtube.com/watch?v=0gk6K80lN8g&ab_channel=MiguelLopez
        otro  <h1>Category Page</h1>
        <ul>
           <li> <Link to='/'> Subcategory 1</Link> </li>
           <li> <Link to='/create'> Subcategory 2</Link>  </li>
           <li> <Link to='edit/:id'> Subcategory 2</Link>  </li>
        </ul>
    
        <Routes>
           <Route path='/' component={<CompShowBlogs />} />
           <Route path='/create' component={<CompCreateBlog />} />
           <Route path='edit/:id' component={<CompEditBlog /> } />
        </Routes>
323*/


function Admin() {
 return (
    <div>
       <CompShowBlogs />
    </div>
);
    
}

export default Admin