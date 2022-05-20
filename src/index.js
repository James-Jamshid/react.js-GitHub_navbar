import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GitHub from './components/GitHub';
// import Search from './components/Search';
import PullRequest from './components/PullRequest';
import Issues from './components/Issues';
import Marketplace from './components/Marketplace';
import Explore from './components/Explore';
import Bell from './components/Bell';
import Plus from './components/Plus';
import Profil from './components/Profil';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
   <Route path='/' element={<App/>}> </Route>
   <Route path='/GitHub' element={<GitHub/>}> </Route>
   {/* <Route path='/Search' element={<Search/>}> </Route> */}
   <Route path='/PullRequest' element={<PullRequest/>}> </Route>
   <Route path='/Issues' element={<Issues/>}> </Route>
   <Route path='/Marketplace' element={<Marketplace/>}> </Route>
   <Route path='/Explore' element={<Explore/>}> </Route>
   <Route path='/Bell' element={<Bell/>}> </Route>
   <Route path='/Plus' element={<Plus/>}> </Route>
   <Route path='/Profil' element={<Profil/>}> </Route>


 </Routes>
 </BrowserRouter>
);

