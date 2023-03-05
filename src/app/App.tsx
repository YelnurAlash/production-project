import React, {Suspense, useContext, useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import './styles/index.scss';
// import {MainPageAsync} from "pages/MainPage/MainPage.async";
// import {AboutPageAsync} from "pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "pages/MainPage";
import {AboutPageAsync} from "pages/AboutPage";
import {useTheme} from "app/providers/ThemeProvider";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    
    return (
      <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>Toggle</button>
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