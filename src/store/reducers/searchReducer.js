const initState = {
    forecast: ''
}

const searchReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SEARCH':
            return {
                forecast: action.forecast
            }
        case 'ERROR':
            return {
                forecast: 'error'
            }
    }
    return state;
}



export default searchReducer;