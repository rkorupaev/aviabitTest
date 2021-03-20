import React from "react";
import style from "./Stats.module.css"

const Stats = (props) => {

    let totalTime = 0;
    let newPostTextInput = React.createRef();

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
                        timeWork: filteredArrayEst[i].timeWork,
                        type: filteredArrayEst[i].type
                    });
                }
            }
        }

        totalHoursEst = Math.floor(countHours(filteredArrayEst) / 3600);
        totalMinutesEst = (countHours(filteredArrayEst) % 3600) / 60;

        let filteredArrayAct = filteredArrayEst.filter(item => item.type === 0);

        totalHoursAct = Math.floor(countHours(filteredArrayAct) / 3600);
        totalMinutesAct = (countHours(filteredArrayAct) % 3600) / 60;

        let months = []

        for (let i = 0; i < 12; i++) {
            months[i] = flightsObjects.filter(item => item.month === i + 1);
        }

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
                    monthMinutesAct: totalSecs % 3600 / 60
                });
            }
        });
    }

    return (
        <div>
            <div className={style.filter}>
                <p className={style.filter__text}>Введите год поиска:</p>
                <input className={style.filter__input} placeholder="2017" ref={newPostTextInput}
                       onChange={() => props.onTextAreaChange(newPostTextInput.current.value)}></input>
                <button className={style.filter__button}
                        onClick={() => props.onSendQueryButtonCLick(newPostTextInput.current.value)}
                        type="submit">Отправить запрос
                </button>
            </div>
            <div className={style.statistics}>
                <div className={style.statBlock}>
                    <h2>За год: <span>{props.filterYear}</span></h2>
                    <p className={style.statBlock__hours}>Плановое
                        время: <span>{totalHoursEst}</span> ч. <span>{totalMinutesEst}</span> мин.
                    </p>
                    <p className={style.statBlock__hours}>Фактическое
                        время: <span>{totalHoursAct}</span> ч. <span>{totalMinutesAct}</span> мин.
                    </p>
                    <div className={props.filterYear ? style.statBlock__monthWrapper : style.statBlock__monthWrapperHidden}>
                        <h2>По месяцам:</h2>
                        <ul className={style.statBlock__monthlist}>
                            {monthTimes.map((month, index) => <li className={style.statBlock__monthlistItem}>
                                <h2>{index + 1}</h2><p
                                className={style.statBlock__itemText}>Плановое
                                время: <span>{month.monthHoursEst}</span> ч. <span>{month.monthMinutesEst}</span> мин.
                            </p>
                                <p className={style.statBlock__itemText}>Фактическое
                                    время: <span>{month.monthHoursAct}</span> ч. <span>{month.monthMinutesAct}</span> мин.
                                </p></li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;
