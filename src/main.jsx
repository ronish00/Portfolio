import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
import Project from './pages/Project.jsx';
import Contact from './pages/Contact.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import App from './App.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "work",
//         element: <Work />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />} >
//       <Route path="" element={<Home />} />

//       <Route path="project" element={<Project />} />
//       <Route path="project/:projectName" element={<ProjectDetails />} />

//       <Route path="contact" element={<Contact />} />
      
//       <Route path='*' element={<div>No page found</div>} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
