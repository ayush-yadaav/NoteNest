import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CreateNotes from './components/CreateNotes'
import Notes from './components/Notes'
import Layout from './Layout/Layout'
import ErrorPage from './components/ErrorPage'
import ViewNotes from './components/ViewNotes'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    errorPage: <ErrorPage />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/createnotes',
        element: <CreateNotes />
      },
      {
        path:'/notes',
        element:<Notes />
      },
      {
        path:'/notes/:id',
        element: <ViewNotes />
      },
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App