import React from 'react';
import './App.css';
import Header from './components/Header';
import Categories from './components/Categories';
import Menu from './components/Menu';
import dataMenu from './dataMenu';

export default function App() {
  const [menuItems, setMenuItems] = React.useState(dataMenu);

  const filterItems = (category) => {
    if(category === "All") {
      setMenuItems(dataMenu)
      return;
    }
    const newItems = dataMenu.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };

  return (
    <div className='container'>
      <Header />
      <Categories filter={filterItems} />
      <Menu items={menuItems} />
    </div>
  )
}
