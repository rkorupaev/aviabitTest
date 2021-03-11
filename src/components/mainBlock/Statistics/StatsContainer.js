import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {changeTextAreaAC, setFlightsAC, setYearAC} from "../../../redux/flightListreducer";
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


    render() {
        return <Stats flightsArray={this.props.flightsArray} filterYear={this.props.filterYear}
                      onTextAreaChange={this.onTextAreaChange}
                      onSendQueryButtonCLick={this.onSendQueryButtonCLick}/>;
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
        }
    }
};

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(StatsApi);

export default StatsContainer;
