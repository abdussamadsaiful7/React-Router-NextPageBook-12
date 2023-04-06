
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './Components/Header/Header';

function App() {
  const App = useLoaderData();

  return (
    <div className="App">
     <Header></Header>
     <Outlet/>
    </div>
  )
}

export default App
