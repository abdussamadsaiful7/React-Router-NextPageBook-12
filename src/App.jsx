
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'

function App() {
  const App = useLoaderData();

  return (
    <div className="App">
     
     <Outlet/>
    </div>
  )
}

export default App
