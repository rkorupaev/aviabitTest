import React from "react";
import style from "./mainBlock.module.css"
import StatsContainer from "./Statistics/StatsContainer";
import Months from "./Months/Months";
import Month from "./Months/MonthItem/Month";
import {Redirect, Route} from "react-router-dom";

const Main = () => {
    return (
        <div className={style.main}>
            <h1>Статистика налета</h1>
            <StatsContainer/>
        </div>
    );
};

export default Main;
