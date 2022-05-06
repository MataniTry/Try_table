import React from "react";
import btn from './Buttons.module.css'

const Add_button = () =>{
    return (
        <div >
            <button className={btn.btn} name="add_btn" value="clicked" type="button">Добавить ученика</button>
        </div>

    )
}

export default Add_button;