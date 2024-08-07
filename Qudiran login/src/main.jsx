import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider,  createBrowserRouter } from "react-router-dom"
import App from './App.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {path : "/", element: <Login/>},
  {path: "/app", element:<App />}

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>
)
