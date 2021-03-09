import React from "react";
import style from "./mainBlock.module.css"
import StatsContainer from "./Statistics/StatsContainer";

const Main = () => {
    return (
        <div className={style.main}>
            <h1>Статистика налета</h1>
            <StatsContainer/>
        </div>
    );
};

export default Main;
