import React from "react";
import style from "./Stats.module.css"
import YearStats from "./YearStats/YearStats";
import {Redirect, Route, Switch} from "react-router-dom";
import Months from "./Months/Months";

const Stats = (props) => {

    let totalTime = 0;

    const countHours = (array) => {
        totalTime = 0;
        array.forEach(item => {
            totalTime = totalTime + item.timeWork;
        });
        return totalTime;
    };

    let totalHoursAct = 0;
    let totalMinutesAct = 0;

    let totalHoursEst = 0;
    let totalMinutesEst = 0;

    let filteredArrayEst = [];
    let dateArray = [];
    let flightsObjects = [];
    let monthTimes = [];
    let months = []

    if (props.flightsArray.length > 0) {

        props.flightsArray.forEach(item => {
            if (item.dateFlight.includes(props.filterYear)) {
                filteredArrayEst.push(item);
            }
        });

        for (let i = 0; i < filteredArrayEst.length; i++) {
            dateArray.push(filteredArrayEst[i].dateFlight)
            for (let j = 1; j <= 12; j++) {
                if (dateArray[i].includes(`-0` + j + `-`) || dateArray[i].includes(`-` + j + `-`)) {
                    flightsObjects.push({
                        month: j,
                        ...filteredArrayEst[i]
                    });
                }
            }
        }

        totalHoursEst = Math.floor(countHours(filteredArrayEst) / 3600);
        totalMinutesEst = (countHours(filteredArrayEst) % 3600) / 60;

        let filteredArrayAct = filteredArrayEst.filter(item => item.type === 0);

        totalHoursAct = Math.floor(countHours(filteredArrayAct) / 3600);
        totalMinutesAct = (countHours(filteredArrayAct) % 3600) / 60;


        for (let i = 0; i < 12; i++) {
            months[i] = flightsObjects.filter(item => item.month === i + 1);
        }

        let onMonthArrayHandler = (months) => {
            props.onMonthLinkCLick(months)
        }

        onMonthArrayHandler(months);

        months.forEach((month, index) => {
            if (month.length > 0) {
                let totalSecs = countHours(month);

                month.forEach(item => {
                    if (item.type === 1) {
                        totalSecs = totalSecs - item.timeWork;
                    }
                });

                monthTimes.push({
                    monthHoursEst: Math.floor(countHours(month) / 3600),
                    monthMinutesEst: countHours(month) % 3600 / 60,
                    monthHoursAct: Math.floor(totalSecs / 3600),
                    monthMinutesAct: totalSecs % 3600 / 60,
                    monthId: index + 1
                });
            }
        });
    }

    return (
        <section>
            <Switch>
                <Route path="/yearstats"
                       render={() => <YearStats totalHoursEst={totalHoursEst} totalMinutesEst={totalMinutesEst}
                                                totalHoursAct={totalHoursAct}
                                                totalMinutesAct={totalMinutesAct} monthTimes={monthTimes}
                                                props={props}
                                                months={months}/>}/>
                <Route path="/months"
                       render={() => <Months />}/>
                <Redirect from="/" to="/yearstats"/>
            </Switch>


        </section>
    );
};

export default Stats;
