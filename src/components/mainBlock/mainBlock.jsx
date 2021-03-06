import React from "react";
import style from "./mainBlock.module.css"

const Main = () => {
    return (
        <div className={style.main}>
            <h1>Статистика налета</h1>
            <div className={style.main__statistics}>
                <div className={style.main__statBlock}>За месяц</div>
                <div className={style.main__statBlock}>За год</div>
            </div>
        </div>
    );
};

export default Main;
