import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import './index.css'
import Layouts from './Layouts.jsx'
import Home from './Pages/Home.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import History from './Pages/History.jsx'
import Feedback from './Pages/Feedback.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layouts />}>
      {/* yahan child routes add karo */}
      <Route path="/home" element={<Home/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/history" element={<History/>} />
      <Route path="/feedback" element={<Feedback/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)