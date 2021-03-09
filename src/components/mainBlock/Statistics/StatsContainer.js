import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setFlightsAC} from "../../../redux/flightListreducer";
import Stats from "./Stats";

class StatsApi extends React.Component {
    componentDidMount() {

        axios.get(`http://localhost:4000/data`).then(response => {
            this.props.setFlights(response.data)

        });
    };

    render() {
        return <Stats flightsArray={this.props.flightsArray}/>;
    }
}


let mapStateToProps = (state) => {
    return {
        flightsArray: state.flightList.flightsArray
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        setFlights: (flightsArray) => {
            dispatch(setFlightsAC(flightsArray));
        }
    }
};

const StatsContainer = connect(mapStateToProps, mapDispatchToProps)(StatsApi);

export default StatsContainer;
