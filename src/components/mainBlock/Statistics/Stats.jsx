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

    if (props.flightsArray.length > 0) {

        props.flightsArray.forEach(item => {
            if (item.dateFlight.includes(props.filterYear)) {
                filteredArrayEst.push(item);
            }
        });

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
                    <ul>
                        <li>Тут будет список месяцев</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Stats;
