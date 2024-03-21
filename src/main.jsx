import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contacts } from './pages/Contacts.jsx'

  const router = createBrowserRouter([
    {
      path:"/",
      element: <App/>,
      children: [
        {
        path: "/",
        element: <h1>Overview</h1>
      },
      {
        path:"/contacts",
        element: <Contacts/>
      },
      {
        path:"/favorites",
        element: <h1>favorites</h1>
      }
    ]
    } //
  ])
  ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  );

