import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Pastes from "./components/Pastes";
import ViewPastes from "./components/ViewPastes";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
import React from 'react'
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/pastes",
    element: <Pastes/>
  },
  {
    path: "/pastes/:id",
    element: <ViewPastes/>
  },
])

function App() {
  return (

      <div>
        <RouterProvider router={router} />
      </div>

  )
}

export default App
