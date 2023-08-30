import './main.css'
import React from 'react'
import Doing from './Doing/Doing';
import Done from './Done/Done';
import Todo from './Todo/Todo';

const Main = () => {
    return (
        <div className='main_container'>
            <div className='todo'>
                <Todo  />
            </div>

            <div className='doing'>
                <Doing />
            </div>

            <div className='done'>
                <Done  />
            </div>
        </div>
    )
}

export default Main
