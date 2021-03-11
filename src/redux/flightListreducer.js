const SET_FLIGHTS = "SET_FLIGTHS";
const SET_YEAR = "SET_YEAR";
const CHANGE_TEXT = "CHANGE_TEXT";
const FILTER_ARRAY = "FILTER_ARRAY";

let initialState = {
    flightsArray: [],
    filterYear: ``,
    areaText: ``
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
        case FILTER_ARRAY: {
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

export const changeTextAreaAC = (text) => {
    return ({type: CHANGE_TEXT, text});
}

export const filterArrayAC = () => {
    return ({type: FILTER_ARRAY})
}

export default flightListReducer;
