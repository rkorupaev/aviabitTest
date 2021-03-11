import React from "react";
import style from "./Stats.module.css"

const Stats = (props) => {

    let totalHours = 0;
    let totalMinutes = 0;
    let totalTime = 0;

    let filteredArray = [];

    if (props.flightsArray.length > 0) {

        props.flightsArray.forEach(item => {
            if (item.dateFlight.includes(props.filterYear)) {
                filteredArray.push(item);
            }
        });

        filteredArray.forEach(item => {
            totalTime = totalTime + item.timeWork;
        });
        totalHours = Math.floor(totalTime / 3600);
        totalMinutes = (totalTime % 3600) / 60;
    }

    let newPostTextInput = React.createRef();

    return (
        <div>
            <div className={style.filter}>
                <p className={style.filter__text}>Введите год поиска:</p>
                <input className={style.filter__input} placeholder="2017" ref={newPostTextInput}
                          onChange={() => props.onTextAreaChange(newPostTextInput.current.value)}></input>
                <button className={style.filter__button} onClick={()=> props.onSendQueryButtonCLick(newPostTextInput.current.value)}>Отправить запрос</button>
            </div>
            <div className={style.statistics}>
                <div className={style.statBlock}>
                    <h2>За год</h2>
                    <p className={style.statBlock__hours}><span>{totalHours}</span> ч. <span>{totalMinutes}</span> мин.
                    </p>
                    <ul><li>Тут будет список месяцев</li></ul>
                </div>
                {/*<div className={style.statBlock}>*/}
                {/*    <h2>За месяц</h2>*/}
                {/*    <p className={style.statBlock__hours}><span>{totalHours}</span> ч. <span>{totalMinutes}</span> мин.*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Stats;
