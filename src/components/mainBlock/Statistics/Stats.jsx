import React from "react";
import style from "./Stats.module.css"

const Stats = (props) => {

    let totalTime = 0;

    if (props.flightsArray.length > 0) {
        props.flightsArray.forEach(item => {
           totalTime = totalTime + item.timeWork;
        });
        totalTime = totalTime / 360;
        console.log(props.flightsArray);
    }

    return (
        <div className={style.statistics}>
            <div className={style.statBlock}>
                <h2>За год</h2>
                <p className={style.statBlock__hours}><span>{totalTime}</span> ч.</p>
            </div>
            <div className={style.statBlock}><h2>За месяц</h2></div>
        </div>
    );
};

export default Stats;
