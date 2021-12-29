import React from 'react';
import { increment } from '../redux/counters/counterActions';
import { connect } from 'react-redux';

const Counter = ({ employee, incrementCounter }) => {
    const { id, name, count } = employee
    return (
        <div className='counter'>
            <span>{id}, {name}, {count} </span>
            <button onClick={() => incrementCounter(id)}>add</button>
        </div>
    )
}

const mapDispatchToProps =  (dispatch) => ({
    incrementCounter: id => dispatch(increment(id))
})

export default connect(null, mapDispatchToProps)(Counter);