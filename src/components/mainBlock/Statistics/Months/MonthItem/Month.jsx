import React from "react";
import style from "./Month.module.css";


const Month = (props) => {

    const id = props.match.params.id;

    let monthFlights = props.monthsArray[id - 1];

    console.log(monthFlights);

    return (<div className={style.month}>
        <h2>За {id} месяц.</h2>
        <ul className={style.month__list}>
            {monthFlights.map(flight => <li className={style.month__flight}>
                <ul className={style.month__infolist}>
                    <li>Рейс: <span>{flight.flight}</span></li>
                    <li>Дата рейса: <span>{flight.dateFlight}</span></li>
                    <li>Тип ВС: <span>{flight.plnType}</span> с бортовым: <span> {flight.pln}</span></li>

                    <li>Время налета: <span>{flight.timeFlight}</span></li>
                    <li>Полетное время: <span>{flight.timeBlock}</span></li>
                    <li>Ночное летное время: <span>{flight.timeNight}</span></li>
                    <li>Биологическая ночь: <span>{flight.timeBiologicalNight}</span></li>
                    <li>Рабочее время: <span>{flight.timeWork}</span></li>
                    <li>{flight.type === 1 ? <span>Время плановое.</span> : <span>Время фактическое.</span>}</li>
                </ul>
                <div className={style.month__depdestBlock}>
                    <div><h2>Порт вылета: {flight.takeoff.name}</h2>
                        <p>Координаты КТА: <span>Широта: ({flight.takeoff.lat})</span>
                            <span> Долгота: ({flight.takeoff.long})</span></p></div>
                    <div><h2>Порт посадки: {flight.landing.name}</h2>
                        <p>Координаты КТА: <span>Широта: ({flight.landing.lat})</span>
                            <span> Долгота: ({flight.landing.long})</span></p></div>
                </div>
            </li>)}

        </ul>

    </div>)
};

export default Month;
