
import './App.css'
import { Outlet, useLoaderData } from 'react-router-dom'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  const App = useLoaderData();

  return (
    <div className="App">
     <Header></Header>
     <Outlet/>
     <Footer></Footer>
    </div>
  )
}

export default App
