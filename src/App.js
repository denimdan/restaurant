import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Menu from './components/Menu';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import menu from './data/menu';
import hoursList from './data/hours';

const allCategories = ['all', ... new Set(menu.map((item) => item.category))];

function App() {

  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);
  const [hours, setHours] = useState(hoursList);

    const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems)
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/about' render={() => <AboutPage  hours={hours} />} />          
          <Route path='/menu' render={() => <Menu items={menuItems} categories={categories} filterItems={filterItems} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;