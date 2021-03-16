import React from "react";
import style from "./Stats.module.css"

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
    let monthsIndexArray = [];
    let dateArray = [];
    let monthsArray = [];

    if (props.flightsArray.length > 0) {

        props.flightsArray.forEach(item => {
            if (item.dateFlight.includes(props.filterYear)) {
                filteredArrayEst.push(item);
            }
        });


        for (let i = 0; i < filteredArrayEst.length; i++) {
            dateArray.push(filteredArrayEst[i].dateFlight)
            for (let j = 1; j <= 12; j ++) {
                if (dateArray[i].includes(`-0`+ j + `-`) || dateArray[i].includes(`-` + j + `-`)) {
                    monthsIndexArray.push(j)
                }
            }
        }

        console.log(dateArray);
        console.log(monthsIndexArray);

        monthsArray = [... new Set(monthsIndexArray)].sort((a, b) => a - b);

        console.log(monthsArray);


        totalHoursEst = Math.floor(countHours(filteredArrayEst) / 3600);
        totalMinutesEst = (countHours(filteredArrayEst) % 3600) / 60;

        let filteredArrayAct = filteredArrayEst.filter(item => item.type === 0);

        totalHoursAct = Math.floor(countHours(filteredArrayAct) / 3600);
        totalMinutesAct = (countHours(filteredArrayAct) % 3600) / 60;
    }

    let newPostTextInput = React.createRef();

    return (
        <div>
            <div className={style.filter}>
                <p className={style.filter__text}>Введите год поиска:</p>
                <input className={style.filter__input} placeholder="2017" ref={newPostTextInput}
                       onChange={() => props.onTextAreaChange(newPostTextInput.current.value)}></input>
                <button className={style.filter__button}
                        onClick={() => props.onSendQueryButtonCLick(newPostTextInput.current.value)}>Отправить запрос
                </button>
            </div>
            <div className={style.statistics}>
                <div className={style.statBlock}>
                    <h2>За год:</h2>
                    <p className={style.statBlock__hours}>Плановое
                        время: <span>{totalHoursEst}</span> ч. <span>{totalMinutesEst}</span> мин.
                    </p>
                    <p className={style.statBlock__hours}>Фактическое
                        время: <span>{totalHoursAct}</span> ч. <span>{totalMinutesAct}</span> мин.
                    </p>
                    <h2>По месяцам:</h2>
                    <ul className={style.statBlock__monthlist}>
                        {monthsArray.map(month => <li className={style.statBlock__monthlistItem}>{month}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stats;
