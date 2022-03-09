import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import MenuPage from './components/MenuPage';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {

  const [items, setItems] = useState([]);
  const [hours, setHours] = useState([]);
  const [isMenuLoading, setIsMenuLoading] = useState(true);
  const [isHoursLoading, setIsHoursLoading] = useState(true);  

  const fetchHours = async () => {
    const result = await axios.get(
      `http://localhost:3001/hours`
    )
    setHours(result.data)
    setIsHoursLoading(false)
  }

  const fetchItems = async () => {
    const result = await axios.get(
      `http://localhost:3001/menu`
    )
    setItems(result.data[0])
    setIsMenuLoading(false)
  }

  useEffect(() => {
    fetchItems()
    fetchHours()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/about' render={() => <AboutPage isHoursLoading={isHoursLoading} hours={hours} />} />
          <Route path='/menu' render={() => <MenuPage isMenuLoading={isMenuLoading} items={items} />} />
          <Redirect to='/home' />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;