import React from "react";
import style from "./Months.module.css";
import Month from "./MonthItem/Month";
import {Route} from "react-router-dom";
import MonthContainer from "./MonthItem/MonthContainer";


const Months = (props) => {
    return (<section>
        <Route path="/months/:id" render={props => (
            <MonthContainer {...props}/>
        )}/>
    </section>)
};

export default Months;
