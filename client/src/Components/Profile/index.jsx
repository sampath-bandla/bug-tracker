import React, { useState,useEffect } from 'react'
import ProfileImg from "../../Assets/Images/profile.jpg"
import Drawer from './Drawer/index'

function Profile({ user }) {

  const [isDrawerOn, setDrawerIsOn] = useState(false)
  const toggleSwitch = () => setDrawerIsOn(!isDrawerOn);
  useEffect(() => {
    document.body.addEventListener('click', () => {
      setDrawerIsOn(false);
    });

    return function cleanup() {
      window.removeEventListener('click', () => {
      setDrawerIsOn(false);
      });
    }
  }, []);

  return (
    <div className='relative' onClick={(e) => {
      e.stopPropagation();
    }}>
      <button onClick={toggleSwitch} className='h-5 outline-2 outline outline-mainAccentColor outline-offset-2  w-5 rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src={ProfileImg} alt="Profile image" />
      </button>
      <Drawer user={user} isDrawerOn={isDrawerOn} setDrawerIsOn={setDrawerIsOn} />
    </div>
  )
}

export default Profile