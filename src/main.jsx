import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Books from './Components/Books/Books'
import BookDetails from './Components/Books/BookDetails'
import Loader from './Components/Loader/Loader'
import Error from './Components/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error></Error>,
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
      },
      {
        path: 'loader',
        element: <Loader></Loader>
      }
    ]
  },
  
])
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>
)
