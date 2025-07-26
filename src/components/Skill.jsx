import React from 'react'
import sound from '../pages/audio/tap-notification-180637.mp3'
import useSound from 'use-sound'

const Skill = ({skillName, skillImage}) => {
    const [play] = useSound(sound, {volume : 0.3});
  return (
    <>
       <div className='skill' onMouseEnter={play}>
          <div className='d-flex'>
          <img className='skillpic mx-auto' src={skillImage} alt="" />
          </div>
          <p className='text-center bold mb-0'>{skillName}</p>
        </div>
    </>
  )
}

export default Skill