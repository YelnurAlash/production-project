import React, {Suspense} from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './index.scss';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

const App = () => {
  return (
      <div>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>loading...</div>}>
          <Routes>
              <Route path={'/'} element={<MainPageAsync />} />
              <Route path={'/about'} element={<AboutPageAsync />} />
          </Routes>
      </Suspense>
      </div>
     
  )
}

export default App;

