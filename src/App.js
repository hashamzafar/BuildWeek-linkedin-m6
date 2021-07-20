import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Footer from './Components/Footer/Footer';
import TopNavBar from './Components/NavBar/TopNavBar';
import SearchOverlay from './Components/SearchOverlay';
import Profile from './Components/Profile';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Components/Login/Login'



const App = (props) => {
  const [loggedUser, setLoggedUser] = useState(false)
  const [isSearchOn, setIsSearchOn] = useState(false) //not being used atm  this is to set the overlay when the search is going on
  const [userData, setUserData] = useState('')

  return (

    <>

      <div className="container-fluid p-0 m-0">
        <Router>
        {window.location.pathname !== '/' && <TopNavBar userData={userData} setIsSearchOn={setIsSearchOn}></TopNavBar>}
          <Route path="/" exact render={(routerProps) => <Login setUserData={setUserData} setLoggedUser={setLoggedUser}  {...routerProps}></Login>}></Route>
          <Route path="/home" exact render={(routerProps) => <Home userData={userData}  {...routerProps}></Home>}></Route>
          <Route path="/profile" exact render={(routerProps) => <Profile userData={userData}  {...routerProps}></Profile>}></Route>
        </Router>

        <Container>
          <Footer></Footer>
        </Container>
      </div>
    </>

  );
}

export default App

