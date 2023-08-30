import React from 'react'
import Card from '../Card';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const Done = () => {
  return (
    < >
    <hr className='line' style={{ backgroundColor: "hsl(26deg 100% 50%)"}}/>
      <nav className='head '>
        
        <span style={{ color: "hsl(26deg 100% 50%)"}}>Done</span>
        <div className='right'>
          <ul className='menu done_menu'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        < AddCircleRoundedIcon  style={{ color: "hsl(26deg 100% 50%)"}} />
        </div>
      </nav>
      <section>
      <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  )
}

export default Done
