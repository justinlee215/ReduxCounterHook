const INITIAL_STATE = 
    [
        {
            id: 1,
            name: 'Arthur',
            count: 80
        },
        {
            id: 2,
            name: 'Joe',
            count: 85
        },
        {
            id: 3,
            name: 'Tony',
            count: 78
        },
    ]


const counterReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'INCREMENT': 
            return state.map(employee => {
                if (employee.id === action.id) {
                    return {...employee, count: employee.count+=1 }
                } else {
                    return employee;
                }
            });
        default:
            return state;
        }
}

export default counterReducer;