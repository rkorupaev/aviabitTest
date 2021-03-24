import React from "react";
import {connect} from "react-redux";
import Month from "./Month";

const mapStateToProps = (state) => {
    return {
        monthsArray: state.flightList.monthFlights
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const MonthContainer = connect(mapStateToProps, mapDispatchToProps)(Month);

export default MonthContainer;
