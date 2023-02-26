import { useState } from 'react'
import './App.css'

import routerLink from './config/routes'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <RouterProvider router={routerLink}/>
  )
}

export default App
