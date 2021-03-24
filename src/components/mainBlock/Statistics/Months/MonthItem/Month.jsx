import React from "react";
import style from "./Month.module.css";


const Month = (props) => {

    const id = props.match.params.id;

    let monthFlights = props.monthsArray[id - 1];

    console.log(monthFlights);

    return (<div className={style.month}>
        <h2>За {id} месяц.</h2>
        <ul>
            {monthFlights.map(flight => <li><h2>Рейс: {flight.flight}</h2>
                <p>Дата рейса: {flight.dateFlight}</p>
                <p>Тип ВС: {flight.plnType} <span> с бортовым: {flight.pln}</span></p>
                <ul>
                    <li>Время налета: {flight.timeFlight}</li>
                    <li>Полетное время: {flight.timeBlock}</li>
                    <li>Ночное летное время: {flight.timeNight}</li>
                    <li>Биологическая ночь: {flight.timeBiologicalNight}</li>
                    <li>Рабочее время: {flight.timeWork}</li>
                </ul>
                {flight.type === 1 ? <p>Время плановое.</p> : <p>Время фактическое.</p>}
                <div>
                    <div><h2>Порт вылета: {flight.takeoff.name}</h2>
                        <p>Координаты КТА: <span>Широта: {flight.takeoff.lat}</span>
                            <span>Долгота: {flight.takeoff.long}</span></p></div>
                    <div><h2>Порт посадки: {flight.landing.name}</h2>
                        <p>Координаты КТА: <span>Широта: {flight.landing.lat}</span>
                            <span>Долгота: {flight.landing.long}</span></p></div>
                </div>
            </li>)}

        </ul>

    </div>)
};

export default Month;
