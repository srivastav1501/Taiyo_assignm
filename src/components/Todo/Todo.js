import React from 'react';
import Card from '../Card';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';


const Todo = () => {
  return (
    <  >
    <hr className='line' />
      <nav className='head'>
        
        <span style={{ color: "hsl(259deg 100% 56%)"}} >Todo</span>
        <div className='right'>
          <ul className='menu todo_menu'>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        < AddCircleRoundedIcon  style={{ color: "hsl(259deg 100% 56%)"}} />
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

export default Todo
