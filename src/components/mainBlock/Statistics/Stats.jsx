import React from "react";
import style from "./Stats.module.css"

const Stats = (props) => {

    let totalHours = 0;
    let totalMinutes = 0;
    let totalTime = 0;

    let filteredArray = [];

    if (props.flightsArray.length > 0) {

        console.log(props.flightsArray);


        props.flightsArray.forEach(item => {
            if (item.dateFlight.includes(props.filterYear)) {
                filteredArray.push(item);
            }
        });

        console.log(filteredArray);

        filteredArray.forEach(item => {
            totalTime = totalTime + item.timeWork;
        });
        totalHours = Math.floor(totalTime / 3600);
        totalMinutes = (totalTime % 3600) / 60;
    }

    let newPostTextArea = React.createRef();


    return (
        <div>
            <div className={style.filter}>
                <p className={style.filter__text}>Введите год поиска:</p>
                <textarea  className={style.filter__textarea} placeholder="2017" cols="20" rows="1" ref={newPostTextArea}></textarea>
                <button className={style.filter__button}>Отправить запрос</button>
            </div>
            <div className={style.statistics}>
                <div className={style.statBlock}>
                    <h2>За год</h2>
                    <p className={style.statBlock__hours}><span>{totalHours}</span> ч. <span>{totalMinutes}</span> мин.
                    </p>
                </div>
                <div className={style.statBlock}>
                    <h2>За месяц</h2>
                    <p className={style.statBlock__hours}><span>{totalHours}</span> ч. <span>{totalMinutes}</span> мин.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Stats;
