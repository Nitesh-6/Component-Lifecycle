import Header from './components/Header'
import './App.css'
import Footer from './components/Footer';
import {Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className='main'>
        <div className='logo'>
        <Link to={""}><img className='logo-image' src="./src/assets/logo_bg.png" alt="LOGO"  /></Link>
        </div>
        <Header/>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
