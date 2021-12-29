import React from 'react'
import { connect } from 'react-redux';
import Counter from './Counter'


const CounterList =({ employees }) => {
    return (
        <div className="counterList">
            <h2>Redux Counter</h2>
            {employees.counter.map(employee => (
                <Counter key={employee.id} employee={employee} />
            ))}
        </div>
    )
};

const mapToStateToProps = (state) => ({
    employees: state
})

export default connect(mapToStateToProps)(CounterList);