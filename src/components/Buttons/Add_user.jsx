import React from "react";
import btn from './Buttons.module.css'

const Add_button = (btn_name) =>{
    return (
        <div >
            <button className={btn.btn} name="add_btn" value="clicked" type="button">{btn_name.name}</button>
        </div>

    )
}

export default Add_button;