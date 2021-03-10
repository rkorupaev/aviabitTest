const SET_FLIGHTS = "SET_FLIGTHS";
const SET_YEAR = "SET_YEAR";

let initialState = {
    flightsArray: [],
    filterYear: `2019`
};

const flightListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLIGHTS: {
            return {...state, flightsArray: [...action.flightsArray]}
        }
        case SET_YEAR: {
            return {...state, filterYear: action.year}
        }
        default:
            return state;
    }
};

export const setFlightsAC = (flightsArray) => {
    return ({type: SET_FLIGHTS, flightsArray});
}

export const setYearAC = (year) => {
    return ({type: SET_YEAR, year});
}

export default flightListReducer;
