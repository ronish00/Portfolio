import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/Theme';
import './index.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import Error from './pages/Error.jsx';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route path="" element={<Home />} />
  
        <Route path="project" element={<Project />} />
        <Route path="project/:projectName" element={<ProjectDetails />} />
  
        <Route path="contact" element={<Contact />} />
        
        <Route path='*' element={<Error />} />
      </Route>
    )
)


const App = () => {

    const [thememode, setThemeMode] = useState("light");

    const lighttheme = () => {
        setThemeMode("light");
        document.querySelector('body').classList.remove("dark");
    }

    const darktheme = () => {
        setThemeMode("dark");
        document.querySelector('body').classList.add("dark");
    }

    useEffect(() => {
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(thememode)
    },[thememode])

    
  return (
    <ThemeProvider value={{thememode, lighttheme, darktheme}}>
        <RouterProvider router={router} ></RouterProvider>
    </ThemeProvider>
  )
}

export default App
