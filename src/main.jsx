import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Books from './Components/Books/Books'
import BookDetails from './Components/Books/BookDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'books',
        element: <Books></Books>,
        loader: ( ) => fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'book/:id',
        element: <BookDetails/>,
        loader: ({params}) =>fetch(`https://api.itbook.store/1.0/books/${params.id}`)
       
      },
      {
        path: 'about',
        element: <About/>
      }
    ]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
