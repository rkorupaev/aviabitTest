const SET_FLIGHTS = "SET_FLIGTHS";
const SET_YEAR = "SET_YEAR";
const CHANGE_TEXT = "CHANGE_TEXT";
const GET_FLIGHTS = "GET_FLIGHTS";

let initialState = {
    flightsArray: [],
    filterYear: ``,
    areaText: ``,
    monthFlights: []
};

const flightListReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FLIGHTS: {
            return {...state, flightsArray: [...action.flightsArray]}
        }
        case SET_YEAR: {
            return {...state, filterYear: action.year}
        }
        case CHANGE_TEXT: {
            return {...state, areaText: action.text}
        }
        case GET_FLIGHTS: {
            return {...state, monthFlights: action.flights}
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

export const changeTextAreaAC = (text) => {
    return ({type: CHANGE_TEXT, text});
}

export const getFlightsAC = (flights) => {
    return ({type: GET_FLIGHTS, flights});
}

export default flightListReducer;
