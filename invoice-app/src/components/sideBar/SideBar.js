import React from 'react'
import './sidebar.css'
import { icons } from '../../icons';


const SideBar = () => {
  return (
    <div className="sidebar">
                    <div className='logo'>
                <div className='logo-icon'>
                    <img src={icons.logo} alt='logo' />
                </div>
                <div className='blank'></div>
            </div>
            <div className='avatar'>
                <button className='toggle' >
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