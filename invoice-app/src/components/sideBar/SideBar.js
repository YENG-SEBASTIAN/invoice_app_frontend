import React from 'react'
import './sidebar.css'
import { icons } from '../../icons';
import useLocalStorage from 'use-local-storage';


const SideBar = () => {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
  }
  return (
    <div className="sidebar">
      <div className='logo'>
        <div className='logo-icon'>
          <img src={icons.logo} alt='logo' />
        </div>
        <div className='blank'></div>
      </div>
      <div className='avatar'>
        {
          theme === 'dark' ? <>
            <button className='toggle'
              onClick={() => switchTheme}
            >
              <img src={icons.moon} alt='toggle' />
            </button>
          </> : theme === 'light' ? <>
            <button className='toggle'
              onClick={() => switchTheme}
            >
              <img src={icons.sun} alt='toggle' />
            </button>
          </> : <>
            <button className='toggle'
              onClick={() => switchTheme}
            >
              <img src={icons.moon} alt='toggle' />
            </button>
          </>
        }
        <button className='toggle'
          onClick={() => switchTheme}
        >
          <img src={icons.moon} alt='toggle' />
        </button>
        <hr />
        <div className='main-avatar'>
          <img src={icons.avatar} alt='avatar' />
        </div>
      </div>
    </div>
  )
}

export default SideBar