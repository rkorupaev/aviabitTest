const SET_FLIGHTS = "SET_FLIGTHS";

let initialState = {
    flightsArray: []
};

const flightListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLIGHTS: {
            return {...state, flightsArray: [...action.flightsArray]}
        }
        default:
            return state;
    }
};

export const setFlightsAC = (flightsArray) => {
    return ({type: SET_FLIGHTS, flightsArray});
}

export default flightListReducer;
