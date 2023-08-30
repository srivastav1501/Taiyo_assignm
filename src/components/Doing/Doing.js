import React from 'react'
import Card from '../Card';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const Doing = () => {
  return (
    < >
    <hr className='line' style={{ backgroundColor: "hsl(172deg 100% 37%)"}}/>
      <nav className='head'>
        
        <span style={{ color: "hsl(172deg 100% 37%)"}}>Doing</span>
        <div className='right'>
          <ul className='menu doing_menu'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        < AddCircleRoundedIcon  style={{ color: "hsl(172deg 100% 37%)"}} />
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

export default Doing
