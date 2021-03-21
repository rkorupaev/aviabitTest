import React from "react";
import style from "./YearStats.module.css"
import {NavLink} from "react-router-dom";

const YearStats = (props) => {
    let newPostTextInput = React.createRef();

    return (
            <div>
                <div className={style.filter}>
                    <p className={style.filter__text}>Введите год поиска:</p>
                    <input className={style.filter__input} placeholder="2017" ref={newPostTextInput}
                           onChange={() => props.props.onTextAreaChange(newPostTextInput.current.value)}></input>
                    <button className={style.filter__button}
                            onClick={() => props.props.onSendQueryButtonCLick(newPostTextInput.current.value)}
                            type="submit">Отправить запрос
                    </button>
                </div>
                <div className={style.statistics}>
                    <div className={style.statBlock}>
                        <h2>За год: <span>{props.filterYear}</span></h2>
                        <p className={style.statBlock__hours}>Плановое
                            время: <span>{props.totalHoursEst}</span> ч. <span>{props.totalMinutesEst}</span> мин.
                        </p>
                        <p className={style.statBlock__hours}>Фактическое
                            время: <span>{props.totalHoursAct}</span> ч. <span>{props.totalMinutesAct}</span> мин.
                        </p>
                        <div
                            className={props.props.filterYear ? style.statBlock__monthWrapper : style.statBlock__monthWrapperHidden}>
                            <h2>По месяцам:</h2>
                            <ul className={style.statBlock__monthlist}>
                                {props.monthTimes.map(month => <NavLink to={"/months/" + month.monthId}
                                                                  className={style.statBlock__monthlistItem}>
                                    <li>
                                        <h2>{month.monthId}</h2><p
                                        className={style.statBlock__itemText}>Плановое
                                        время: <span>{month.monthHoursEst}</span> ч. <span>{month.monthMinutesEst}</span> мин.
                                    </p>
                                        <p className={style.statBlock__itemText}>Фактическое
                                            время: <span>{month.monthHoursAct}</span> ч. <span>{month.monthMinutesAct}</span> мин.
                                        </p>
                                    </li>
                                </NavLink>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default YearStats;
