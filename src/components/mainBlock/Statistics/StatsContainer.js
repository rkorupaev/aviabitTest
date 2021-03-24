import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {changeTextAreaAC, getFlightsAC, setFlightsAC, setYearAC} from "../../../redux/flightListReducer";
import Stats from "./Stats";

class StatsApi extends React.Component {
    componentDidMount() {
        axios.get(`http://localhost:4000/data`).then(response => {
            this.props.setFlights(response.data)

        });
    };

    onTextAreaChange = (text) => {
        this.props.changeTextArea(text);
    }

    onSendQueryButtonCLick = (year) => {
        this.props.setYear(year);
    }

    onMonthLinkCLick = (flights) => {
        this.props.getFlights(flights);
    }


    render() {
        return <Stats flightsArray={this.props.flightsArray} filterYear={this.props.filterYear}
                      onTextAreaChange={this.onTextAreaChange}
                      onSendQueryButtonCLick={this.onSendQueryButtonCLick}
                      onMonthLinkCLick={this.onMonthLinkCLick}/>;
    }
}


let mapStateToProps = (state) => {
    return {
        flightsArray: state.flightList.flightsArray,
        filterYear: state.flightList.filterYear
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setFlights: (flightsArray) => {
            dispatch(setFlightsAC(flightsArray));
        },
        setYear: (year) => {
            dispatch(setYearAC(year));
        },
        changeTextArea: (text) => {
            dispatch(changeTextAreaAC(text));
        },
        getFlights: (flights) => {
            dispatch(getFlightsAC(flights));
        }
    }
};

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(StatsApi);

export default StatsContainer;
